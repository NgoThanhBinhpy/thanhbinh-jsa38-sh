const subjectContent = document.getElementById("content-container");
const subjectItems = [
  {
    img: "http://127.0.0.1:5500/static/img/math.png",
    title: "Toán",
    text: "Rèn luyện tư duy logic qua các bài toán thực tế.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/literature.png",
    title: "Ngữ Văn",
    text: "Phát triển kỹ năng đọc hiểu và viết văn.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/science.png",
    title: "Khoa học tự nhiên",
    text: "Khám phá thế giới tự nhiên và rèn luyện tư duy khoa học.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/art.png",
    title: "Mỹ thuật",
    text: "Phát triển sáng tạo qua vẽ và cảm thụ nghệ thuật.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/English.png",
    title: "Anh Văn",
    text: "Trang bị kỹ năng giao tiếp tiếng Anh tự tin.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/geography.png",
    title: "Địa lý",
    text: "Tìm hiểu tự nhiên, khí hậu và dân cư thế giới.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/history.png",
    title: "Lịch sử",
    text: "Khám phá các sự kiện và nhân vật lịch sử.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/IT.png",
    title: "Tin học",
    text: "Trang bị kỹ năng sử dụng công nghệ thông tin.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/music.png",
    title: "Âm nhạc",
    text: "Cảm thụ giai điệu và thể hiện cảm xúc qua âm nhạc.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/PE.png",
    title: "Giáo dục Thể chất",
    text: "Phát triển thể chất và kỹ năng vận động.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/physics.png",
    title: "Vật lý",
    text: "Khám phá các quy luật tự nhiên như lực và năng lượng.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/chemistry.png",
    title: "Hóa học",
    text: "Tìm hiểu các phản ứng hóa học và ứng dụng thực tế.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/biology.png",
    title: "Sinh học",
    text: "Nghiên cứu về sự sống và các hệ sinh thái.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/sociology.png",
    title: "Xã hội học",
    text: "Tìm hiểu về xã hội và các mối quan hệ con người.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/social-science.png",
    title: "Khoa học xã hội",
    text: "Nghiên cứu về văn hóa và các giá trị xã hội.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/psychology.png",
    title: "Tâm lý học",
    text: "Hiểu rõ tâm lý con người và hành vi xã hội.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/philosophy.png",
    title: "Triết học",
    text: "Suy ngẫm về tư duy, đạo đức và bản chất con người.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/humanities.png",
    title: "Nhân văn học",
    text: "Nghiên cứu về văn hóa, lịch sử và xã hội loài người.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/computer-science.png",
    title: "Khoa học máy tính",
    text: "Phát triển kỹ năng lập trình và giải quyết vấn đề.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/business-studies.png",
    title: "Nghiên cứu kinh doanh",
    text: "Hiểu rõ hoạt động doanh nghiệp và kỹ năng quản lý.",
  },
  {
    img: "http://127.0.0.1:5500/static/img/astromomy.png",
    title: "Thiên văn học",
    text: "Nghiên cứu về vũ trụ và các hiện tượng thiên văn.",
  },
];

function renderSubjects() {
  subjectItems.forEach((item) => {
    const subjectItem = document.createElement("div");
    subjectItem.classList.add("col");
    subjectItem.innerHTML = `
      <div class="card h-100">
            <img src="${item.img}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
              <h5 class="card-title" id="card-title">${item.title}</h5>
              <p class="card-text" id="card-text">
                ${item.text}
              </p>
            </div>
          </div>
    `;
    subjectContent.appendChild(subjectItem);
  });
}

document.addEventListener("DOMContentLoaded", renderSubjects);

function addSubject(img, title, text) {
  const newSubject = {
    img: img,
    title: title,
    text: text,
  };
  subjectItems.push(newSubject);
  renderSubjects();
}
