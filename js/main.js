
  // Kích hoạt tooltip của Bootstrap
  document.addEventListener("DOMContentLoaded", function () {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });

  function updateProgress() {
  const badges = document.querySelectorAll(".badge-circle");
  const achieved = document.querySelectorAll(".badge-circle.achieved").length;

  const total = badges.length;
  const percent = Math.round((achieved / total) * 100);

  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = percent + "%";
  progressBar.textContent = percent + "%";
}

// Chạy khi load trang
document.addEventListener("DOMContentLoaded", updateProgress);


// Danh sách 84 môn + link docs
  const subjects = [
    { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", url: "https://www.typescriptlang.org/docs/" },
    { name: "React", url: "https://react.dev/" },
    { name: "Vue", url: "https://vuejs.org/guide/introduction.html" },
    { name: "Angular", url: "https://angular.io/docs" },
    { name: "Svelte", url: "https://svelte.dev/docs" },
    { name: "Next.js", url: "https://nextjs.org/docs" },
    { name: "Nuxt.js", url: "https://nuxt.com/docs" },
    { name: "Remix", url: "https://remix.run/docs" },
    { name: "Gatsby", url: "https://www.gatsbyjs.com/docs/" },
    { name: "C", url: "https://devdocs.io/c/" },
    { name: "C++", url: "https://cplusplus.com/doc/" },
    { name: "C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
    { name: "Java", url: "https://docs.oracle.com/javase/tutorial/" },
    { name: "Go", url: "https://go.dev/doc/" },
    { name: "Rust", url: "https://doc.rust-lang.org/book/" },
    { name: "PHP", url: "https://www.php.net/docs.php" },
    { name: "Ruby", url: "https://www.ruby-lang.org/en/documentation/" },
    { name: "Swift", url: "https://developer.apple.com/swift/resources/" },
    { name: "Kotlin", url: "https://kotlinlang.org/docs/home.html" },
    { name: "Perl", url: "https://perldoc.perl.org/" },
    { name: "Scala", url: "https://docs.scala-lang.org/" },
    { name: "Node.js", url: "https://nodejs.org/en/docs/" },
    { name: "Express", url: "https://expressjs.com/" },
    { name: "NestJS", url: "https://docs.nestjs.com/" },
    { name: "Hapi", url: "https://hapi.dev/tutorials/" },
    { name: "Deno", url: "https://deno.land/manual" },
    { name: "Bun", url: "https://bun.sh/docs" },
    { name: "Django", url: "https://docs.djangoproject.com/" },
    { name: "Flask", url: "https://flask.palletsprojects.com/" },
    { name: "FastAPI", url: "https://fastapi.tiangolo.com/" },
    { name: "Spring", url: "https://spring.io/projects/spring-framework" },
    { name: "Laravel", url: "https://laravel.com/docs" },
    { name: "Symfony", url: "https://symfony.com/doc/current/index.html" },
    { name: "SQL", url: "https://dev.mysql.com/doc/" },
    { name: "NoSQL", url: "https://www.mongodb.com/nosql-explained" },
    { name: "MySQL", url: "https://dev.mysql.com/doc/" },
    { name: "SQLite", url: "https://www.sqlite.org/docs.html" },
    { name: "Postgres", url: "https://www.postgresql.org/docs/" },
    { name: "Oracle", url: "https://docs.oracle.com/en/database/" },
    { name: "Firebase", url: "https://firebase.google.com/docs" },
    { name: "MongoDB", url: "https://www.mongodb.com/docs/" },
    { name: "Redis", url: "https://redis.io/docs/" },
    { name: "Supabase", url: "https://supabase.com/docs" },
    { name: "Prisma", url: "https://www.prisma.io/docs/" },
    { name: "Drizzle", url: "https://orm.drizzle.team/docs" },
    { name: "TailwindCSS", url: "https://tailwindcss.com/docs" },
    { name: "Bootstrap", url: "https://getbootstrap.com/docs/" },
    { name: "Bulma", url: "https://bulma.io/documentation/" },
    { name: "MUI", url: "https://mui.com/material-ui/getting-started/" },
    { name: "Chakra UI", url: "https://chakra-ui.com/docs" },
    { name: "Ant Design", url: "https://ant.design/docs/react/introduce" },
    { name: "Sass", url: "https://sass-lang.com/documentation/" },
    { name: "Less", url: "https://lesscss.org/" },
    { name: "PostCSS", url: "https://postcss.org/" },
    { name: "Styled Components", url: "https://styled-components.com/docs" },
    { name: "DaisyUI", url: "https://daisyui.com/docs/" },
    { name: "Shoelace", url: "https://shoelace.style/components/overview" },
    { name: "AI", url: "https://en.wikipedia.org/wiki/Artificial_intelligence" },
    { name: "ML", url: "https://en.wikipedia.org/wiki/Machine_learning" },
    { name: "Deep Learning", url: "https://en.wikipedia.org/wiki/Deep_learning" },
    { name: "Data Science", url: "https://en.wikipedia.org/wiki/Data_science" },
    { name: "Pandas", url: "https://pandas.pydata.org/docs/" },
    { name: "NumPy", url: "https://numpy.org/doc/" },
    { name: "TensorFlow", url: "https://www.tensorflow.org/learn" },
    { name: "PyTorch", url: "https://pytorch.org/docs/stable/index.html" },
    { name: "Matplotlib", url: "https://matplotlib.org/stable/users/index" },
    { name: "Seaborn", url: "https://seaborn.pydata.org/tutorial.html" },
    { name: "Scikit-learn", url: "https://scikit-learn.org/stable/" },
    { name: "Keras", url: "https://keras.io/" }
  ];

  const container = document.getElementById("subjectContainer");

  // Hàm render danh sách
  function renderSubjects(filter = "") {
    container.innerHTML = "";
    const filtered = subjects.filter(s =>
      s.name.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(s => {
      const col = document.createElement("div");
      col.className = "col-6 col-md-2 d-flex";

      col.innerHTML = `
        <a href="${s.url}" target="_blank" class="subject-btn w-100 text-center">
          ${s.name}
        </a>
      `;
      container.appendChild(col);
    });
  }

  // Render mặc định
  renderSubjects();

  // Lọc khi search
  document.getElementById("searchInput").addEventListener("keyup", e => {
    renderSubjects(e.target.value);
  });