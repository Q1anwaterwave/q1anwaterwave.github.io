(function () {
  const posts = Array.isArray(window.BLOG_POSTS) ? window.BLOG_POSTS : [];
  const list = document.getElementById('posts-list');
  const count = document.getElementById('article-count');
  const year = document.getElementById('year');
  const toggle = document.querySelector('.theme-toggle');
  const avatar = document.querySelector('.avatar');

  if (year) year.textContent = new Date().getFullYear();
  if (count) count.textContent = String(posts.length);

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  }

  if (list) {
    if (posts.length === 0) {
      list.innerHTML = '<div class="empty-posts"><div class="empty-icon" aria-hidden="true">▤</div><div><h3>第一篇文章，正在路上。</h3><p>这里暂时还没有公开文章。等写下第一篇，它会出现在这里。</p></div><span class="empty-serial">001 / SOON</span></div>';
    } else {
      list.innerHTML = posts
        .slice()
        .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')))
        .map((post) => {
          const title = escapeHTML(post.title || '未命名文章');
          const description = escapeHTML(post.description || '');
          const date = escapeHTML(post.date || '');
          const url = escapeHTML(post.url || '#articles');
          const tags = Array.isArray(post.tags) ? post.tags.map((tag) => `<span class="post-tag">${escapeHTML(tag)}</span>`).join('') : '';
          return `<article class="post-card"><div class="post-icon" aria-hidden="true">▤</div><div class="post-copy"><div class="post-meta"><time datetime="${date}">${date}</time>${tags}</div><h3><a href="${url}">${title} <span aria-hidden="true">→</span></a></h3><p>${description}</p></div></article>`;
        })
        .join('');
    }
  }

  if (avatar) {
    avatar.addEventListener('error', () => avatar.classList.add('avatar-error'));
    if (avatar.complete && avatar.naturalWidth === 0) avatar.classList.add('avatar-error');
  }

  const savedTheme = localStorage.getItem('blog-theme');
  if (savedTheme === 'light') document.documentElement.dataset.theme = 'light';
  if (toggle) {
    toggle.addEventListener('click', () => {
      const light = document.documentElement.dataset.theme !== 'light';
      document.documentElement.dataset.theme = light ? 'light' : 'dark';
      localStorage.setItem('blog-theme', light ? 'light' : 'dark');
    });
  }

  const tabs = Array.from(document.querySelectorAll('.profile-tabs .tab'));
  tabs.forEach((tab) => tab.addEventListener('click', () => {
    tabs.forEach((item) => { item.classList.remove('active'); item.removeAttribute('aria-current'); });
    tab.classList.add('active');
    tab.setAttribute('aria-current', 'page');
  }));
})();
