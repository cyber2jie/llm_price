import './App.css'
import { useEffect, useRef, useState } from "preact/hooks";
import { h, Fragment } from 'preact';
import { ListModels, ListProviders, OpenUrl } from "../wailsjs/go/main/App.js"

interface Provider {
    id: string;
    name: string;
    desc: string;
    url: string;
}

interface CtxMenu {
    visible: boolean;
    x: number;
    y: number;
    hasSelection: boolean;
    hasRow: boolean;
    hasTable: boolean;
}

function ProviderIcon({ name, id }: { name: string; id: string }) {
    const key = (name + " " + id).toLowerCase();
    const iconColor = "#ffffff";

    if (key.includes("doubao") || key.includes("豆包")) {
        return (
            <svg viewBox="0 0 40 40" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="20" cy="22" rx="12" ry="10" fill={iconColor} />
                <circle cx="16" cy="20" r="1.8" fill="#165DFF" />
                <circle cx="24" cy="20" r="1.8" fill="#165DFF" />
                <ellipse cx="20" cy="25" rx="3" ry="2" fill="#ff7a45" />
                <path d="M10 12 Q14 6 20 8 Q26 6 30 12" stroke={iconColor} stroke-width="3" stroke-linecap="round" fill="none" />
            </svg>
        );
    }

    if (key.includes("qwen") || key.includes("qianwen") || key.includes("通义")) {
        return (
            <svg viewBox="0 0 40 40" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                <polygon points="20,6 23,17 34,17 25,24 28,35 20,28 12,35 15,24 6,17 17,17" fill={iconColor} />
            </svg>
        );
    }

    if (key.includes("kimi") || key.includes("moonshot") || key.includes("月之暗面")) {
        return (
            <svg viewBox="0 0 40 40" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 8 A14 14 0 1 0 26 32 A11 11 0 0 1 26 8 Z" fill={iconColor} />
            </svg>
        );
    }

    if (key.includes("deepseek") || key.includes("深度求索")) {
        return (
            <svg viewBox="0 0 40 40" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18 Q13 10 20 18 Q27 26 34 18" stroke={iconColor} stroke-width="3" stroke-linecap="round" fill="none" />
                <path d="M6 26 Q13 18 20 26 Q27 34 34 26" stroke={iconColor} stroke-width="3" stroke-linecap="round" fill="none" />
            </svg>
        );
    }

    if (key.includes("claude")) {
        return (
            <svg viewBox="0 0 40 40" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 32 L18 10 L22 10 L32 32 Z M14 24 L26 24" stroke={iconColor} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            </svg>
        );
    }

    if (key.includes("gpt") || key.includes("openai") || key.includes("o1") || key.includes("o3")) {
        return (
            <svg viewBox="0 0 40 40" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="11" stroke={iconColor} stroke-width="2.5" fill="none" />
                <ellipse cx="20" cy="20" rx="11" ry="4.5" stroke={iconColor} stroke-width="2" fill="none" />
                <ellipse cx="20" cy="20" rx="4.5" ry="11" stroke={iconColor} stroke-width="2" fill="none" />
            </svg>
        );
    }

    if (key.includes("glm") || key.includes("zhipu") || key.includes("智谱")) {
        return (
            <svg viewBox="0 0 40 40" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="20" height="20" rx="4" stroke={iconColor} stroke-width="2.5" fill="none" transform="rotate(45 20 20)" />
                <circle cx="20" cy="20" r="4" fill={iconColor} />
            </svg>
        );
    }

    if (key.includes("minimax")) {
        return (
            <svg viewBox="0 0 40 40" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                <rect x="7" y="14" width="10" height="12" rx="2" fill={iconColor} />
                <rect x="23" y="14" width="10" height="12" rx="2" fill={iconColor} />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 40 40" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="3" fill={iconColor} />
            <circle cx="26" cy="14" r="3" fill={iconColor} />
            <circle cx="20" cy="22" r="3" fill={iconColor} />
            <circle cx="14" cy="30" r="3" fill={iconColor} />
            <circle cx="26" cy="30" r="3" fill={iconColor} />
            <line x1="14" y1="14" x2="26" y2="14" stroke={iconColor} stroke-width="1.5" />
            <line x1="14" y1="14" x2="20" y2="22" stroke={iconColor} stroke-width="1.5" />
            <line x1="26" y1="14" x2="20" y2="22" stroke={iconColor} stroke-width="1.5" />
            <line x1="14" y1="30" x2="20" y2="22" stroke={iconColor} stroke-width="1.5" />
            <line x1="26" y1="30" x2="20" y2="22" stroke={iconColor} stroke-width="1.5" />
            <line x1="14" y1="14" x2="14" y2="30" stroke={iconColor} stroke-width="1.5" />
            <line x1="26" y1="14" x2="26" y2="30" stroke={iconColor} stroke-width="1.5" />
        </svg>
    );
}

export function App() {
    const [providers, setProviders] = useState<Provider[]>([]);
    const [loadingList, setLoadingList] = useState(true);

    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalHtml, setModalHtml] = useState("");
    const [modalLoading, setModalLoading] = useState(false);

    const [ctxMenu, setCtxMenu] = useState<CtxMenu>({
        visible: false, x: 0, y: 0,
        hasSelection: false, hasRow: false, hasTable: false,
    });
    const ctxTargetRef = useRef<HTMLElement | null>(null);
    const [toastMsg, setToastMsg] = useState("");

    useEffect(() => {
        ListProviders().then((list: Provider[]) => {
            setProviders(list || []);
        }).catch(() => {
            setProviders([]);
        }).finally(() => {
            setLoadingList(false);
        });
    }, []);

    useEffect(() => {
        if (!modalVisible) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setModalVisible(false);
                setCtxMenu((c) => ({ ...c, visible: false }));
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [modalVisible]);

    useEffect(() => {
        if (!ctxMenu.visible) return;
        const close = () => setCtxMenu((c) => ({ ...c, visible: false }));
        window.addEventListener('click', close);
        window.addEventListener('scroll', close, true);
        window.addEventListener('resize', close);
        return () => {
            window.removeEventListener('click', close);
            window.removeEventListener('scroll', close, true);
            window.removeEventListener('resize', close);
        };
    }, [ctxMenu.visible]);

    const showToast = (msg: string) => {
        setToastMsg(msg);
        setTimeout(() => setToastMsg(""), 1800);
    };

    const copyText = async (text: string, label: string) => {
        try {
            await navigator.clipboard.writeText(text);
            showToast(`${label} 已复制`);
        } catch {
            showToast("复制失败");
        }
    };

    const stripLinks = (html: string): string => {
        return html.replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi, (_m, inner) => inner);
    };

    const openModels = async (p: Provider) => {
        setModalTitle(`${p.name} - 模型列表`);
        setModalHtml("");
        setModalLoading(true);
        setModalVisible(true);
        try {
            const html = await ListModels(p.id);
            setModalHtml(stripLinks(html || ""));
        } catch {
            setModalHtml("");
        } finally {
            setModalLoading(false);
        }
    };

    const openWebsite = (p: Provider) => {
        if (p.url) OpenUrl(p.url);
    };

    const closeModal = () => setModalVisible(false);

    const handleContextMenu = (e: MouseEvent) => {
        if (!modalVisible) return;
        const target = e.target as HTMLElement;
        if (!target.closest('.modal-body')) return;
        e.preventDefault();

        const sel = window.getSelection();
        const hasSelection = !!sel && sel.toString().trim().length > 0;

        const row = target.closest('tr') as HTMLElement | null;
        const table = target.closest('table') as HTMLElement | null;

        setCtxMenu({
            visible: true,
            x: e.clientX,
            y: e.clientY,
            hasSelection,
            hasRow: !!row,
            hasTable: !!table,
        });
        ctxTargetRef.current = row || table;
    };

    const copySelected = () => {
        const sel = window.getSelection();
        if (!sel) return;
        copyText(sel.toString(), "选中文本");
        setCtxMenu((c) => ({ ...c, visible: false }));
    };

    const copyRow = () => {
        const row = ctxTargetRef.current;
        if (!row || row.tagName.toLowerCase() !== 'tr') return;
        const cells = row.querySelectorAll('td');
        const text = Array.from(cells).map((c) => (c as HTMLElement).innerText.trim()).join('\t');
        copyText(text, "行内容");
        setCtxMenu((c) => ({ ...c, visible: false }));
    };

    const copyTable = () => {
        const target = ctxTargetRef.current;
        const table = target?.closest('table');
        if (!table) return;
        const rows = table.querySelectorAll('tr');
        const lines: string[] = [];
        rows.forEach((tr) => {
            const cells = tr.querySelectorAll('th, td');
            lines.push(Array.from(cells).map((c) => (c as HTMLElement).innerText.trim()).join('\t'));
        });
        copyText(lines.join('\n'), "表格内容");
        setCtxMenu((c) => ({ ...c, visible: false }));
    };

    const menuStyle: Record<string, string> = {
        left: `${ctxMenu.x}px`,
        top: `${ctxMenu.y}px`,
    };

    return (
        <Fragment>
            <div id="App">
                <header className="page-header">
                    <h1 className="page-title">AI 模型一览</h1>
                    <p className="page-subtitle">选择模型服务商，查看对应模型与定价信息</p>
                </header>

                {loadingList ? (
                    <div className="empty-state">加载中...</div>
                ) : providers.length === 0 ? (
                    <div className="empty-state">暂无数据</div>
                ) : (
                    <div className="card-grid">
                        {providers.map((p) => (
                            <div className="provider-card" key={p.id}>
                                <div className="card-header">
                                    <div className="card-icon">
                                        <ProviderIcon name={p.name} id={p.id} />
                                    </div>
                                    <h3 className="card-name">{p.name}</h3>
                                </div>
                                <div className="card-actions">
                                    <button className="btn btn-primary" onClick={() => openModels(p)}>查看模型</button>
                                    <button className="btn btn-secondary" onClick={() => openWebsite(p)}>进入官网</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {modalVisible && (
                <div className="modal-mask" onClick={closeModal}>
                    <div
                        className="modal-container"
                        onClick={(e) => e.stopPropagation()}
                        onContextMenu={handleContextMenu}
                    >
                        <div className="modal-header">
                            <h3 className="modal-title">{modalTitle}</h3>
                            <button className="modal-close" onClick={closeModal} aria-label="关闭">✕</button>
                        </div>
                        <div className="modal-body">
                            {modalLoading ? (
                                <div className="modal-loading">加载中</div>
                            ) : modalHtml ? (
                                <div dangerouslySetInnerHTML={{ __html: modalHtml }} />
                            ) : (
                                <div className="empty-state">暂无模型数据</div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {ctxMenu.visible && (
                <div className="context-menu" style={menuStyle} onClick={(e) => e.stopPropagation()}>
                    <button
                        className={`context-menu-item ${ctxMenu.hasSelection ? '' : 'disabled'}`}
                        onClick={ctxMenu.hasSelection ? copySelected : undefined}
                    >
                        <span className="ctx-icon">⎘</span>复制选中文字
                    </button>
                    <button
                        className={`context-menu-item ${ctxMenu.hasRow ? '' : 'disabled'}`}
                        onClick={ctxMenu.hasRow ? copyRow : undefined}
                    >
                        <span className="ctx-icon">⇥</span>复制当前行
                    </button>
                    <button
                        className={`context-menu-item ${ctxMenu.hasTable ? '' : 'disabled'}`}
                        onClick={ctxMenu.hasTable ? copyTable : undefined}
                    >
                        <span className="ctx-icon">⊞</span>复制整张表
                    </button>
                    <div className="context-menu-separator" />
                    <button
                        className="context-menu-item"
                        onClick={() => setCtxMenu((c) => ({ ...c, visible: false }))}
                    >
                        <span className="ctx-icon">✕</span>关闭
                    </button>
                </div>
            )}

            {toastMsg && <div className="toast">{toastMsg}</div>}
        </Fragment>
    );
}