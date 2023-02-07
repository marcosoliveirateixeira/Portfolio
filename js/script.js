if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

const skill1Value = document.getElementById("skill-1-value").innerText;
const skill1Bar = document.getElementById("skill-1");

skill1Bar.style.width = skill1Value;