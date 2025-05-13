const fs = require("fs");
const username = "davidesamp"; // ← replace with your GitHub username

const statsMarkdown = `
<!--STATS-->
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&count_private=true&theme=outrun)
<!--/STATS-->
`;

const readmePath = "./README.md";
const readmeContent = fs.readFileSync(readmePath, "utf8");

// Replace existing stats section
const updatedContent = readmeContent.replace(
    /<!--STATS-->[\s\S]*?<!--\/STATS-->/,
    statsMarkdown.trim()
);

fs.writeFileSync(readmePath, updatedContent);
console.log("✅ README updated with latest GitHub stats.");