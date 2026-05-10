function checkUrl(url, keyword) {
  if (url.includes("index.html")) {
    return keyword === "index.html" ? `#` : `./pages/${keyword}`;
  }
  if (keyword === "index.html") {
    return "../index.html";
  }
  return url.includes(keyword) ? `#` : `./${keyword}`;
}

function checkActiveUrl(url, keyword) {
  return url.includes(keyword) ? " active" : "";
}

function createNavbar() {
  const HTMLfile = document.location.href;
  const navbar = document.createElement("nav");
  navbar.classList.add(
    "navbar",
    "navbar-expand-lg",
    "navbar-light",
    "position-sticky",
    "top-0",
    "z-2",
  );
  navbar.innerHTML = `
    <div class="container">
        <a draggable="false" class="navbar-brand mx-auto" href="#">EduSite</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto nav-tabs">
            <li class="nav-item">
              <a draggable="false" class="nav-link${checkActiveUrl(HTMLfile, "index.html")}" href="${checkUrl(HTMLfile, "index.html")}">
                <i class="fa-solid fa-house"></i> Trang chủ
              </a>
            </li>
            <li class="nav-item">
              <a
                draggable="false"
                class="nav-link${checkActiveUrl(HTMLfile, "time-table.html")}"
                href="${checkUrl(HTMLfile, "time-table.html")}"
                ><i class="fa-solid fa-table"></i> Thời khóa biểu</a
              >
            </li>
            <li class="nav-item">
              <a draggable="false" class="nav-link${checkActiveUrl(HTMLfile, "subject.html")}" href="${checkUrl(HTMLfile, "subject.html")}">
                <i class="fa-solid fa-book-open"></i> Môn học</a
              >
            </li>
            <li class="nav-item">
              <a
                draggable="false"
                class="nav-link${checkActiveUrl(HTMLfile, "curriculum.html")}"
                href="${checkUrl(HTMLfile, "curriculum.html")}"
                ><i class="fa-solid fa-diagram-project"></i> Chương trình học</a
              >
            </li>
            <li class="nav-item">
              <a draggable="false" class="nav-link${checkActiveUrl(HTMLfile, "contact.html")}" href="${checkUrl(HTMLfile, "contact.html")}">
                <i class="fa-solid fa-envelope-open-text"></i> Liên hệ</a
              >
            </li>
            <li>
              <a
                class="nav-link"
                href="${checkUrl(HTMLfile, "signin.html")}"
                id="signin-nav-link"
                ><i class="fa-solid fa-right-to-bracket"></i> Đăng nhập</a
              >
            </li>
          </ul>
        </div>
      </div>`;
  document.body.prepend(navbar);
}

document.addEventListener("DOMContentLoaded", createNavbar);
