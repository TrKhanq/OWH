const mentors = [
  { name: "Nguyễn Văn A", role: "Frontend Mentor", exp: "5 năm kinh nghiệm" },
  { name: "Trần Thị B", role: "Backend Mentor", exp: "7 năm kinh nghiệm" },
  { name: "Nguyễn Văn C", role: "Fullstack Mentor", exp: "6 năm kinh nghiệm" },
];

const mentorSelect = document.getElementById("mentorSelect");

// Render mentor vào dropdown
mentors.forEach(m => {
  const option = document.createElement("option");
  option.value = m.name;
  option.textContent = `${m.name} - ${m.role} (${m.exp})`;
  mentorSelect.appendChild(option);
});

// Lấy form
const form = document.querySelector("form");

// Bắt sự kiện submit
form.addEventListener("submit", function(e) {
  e.preventDefault(); // Ngăn form gửi thực sự

  // Hiển thị modal thành công
  const modal = new bootstrap.Modal(document.getElementById('successModal'));
  modal.show();

  // Sau 1 giây chuyển về main.html
  setTimeout(() => {
    window.location.href = "../page/main.html";
  }, 1000);
});
