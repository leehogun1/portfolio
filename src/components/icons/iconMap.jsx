const modules = import.meta.glob([
    '../../assets/icons/*.svg',
    '../../assets/skills/*.svg',
], {
    eager: true,
    query: '?react',
});

export const icons = {};

for (const path in modules) {
    const name = path.split('/').pop().replace('.svg', '');
    icons[name] = modules[path].default;
}
