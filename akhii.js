// Sample blog data
const blogPosts = [
  {
    title: "🌟 First Blog Post",
    date: "July 2, 2025",
    content: "This is my first blog post! I'm excited to share my journey into web development and beyond. Stay tuned!"
  },
  {
    title: "💡 Learning Frontend",
    date: "July 1, 2025",
    content: "Today I started learning HTML and CSS. It’s so fun! I'll be sharing daily progress and tips here."
  }
];

// Function to render posts
function renderBlogPosts() {
  const container = document.getElementById("blog-container");

  blogPosts.forEach(post => {
    const postEl = document.createElement("div");
    postEl.className = "blog-post";

    postEl.innerHTML = `
      <h2>${post.title}</h2>
      <p class="date">${post.date}</p>
      <p>${post.content}</p>
    `;

    container.appendChild(postEl);
  });
}

// Run on page load
document.addEventListener("DOMContentLoaded", renderBlogPosts);
