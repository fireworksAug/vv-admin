// 路由导航栏中英文切换
export function generateTitle(title) {
    const hasKeys = this.$te('route.'+title);
    if (hasKeys) {
        const translateTitle = this.$t('route.'+title);
        return translateTitle;
    } else {
        return title;
    }
}
