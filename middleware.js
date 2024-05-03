export function middleware(req) {
  const url = new URL(req.url);
  if (url.pathname === '/search') {
    // 关闭安全搜索
    url.searchParams.set('safe', 'off');
    // 设置地区为中国
    url.searchParams.set('gl', 'cn');
    return NextResponse.rewrite(url);
  }
}
