function skillsMember() {
  const memberSkills = document.querySelectorAll('.member__skill');
  memberSkills.forEach((skill) => {
    const skillValue = skill.querySelector('.member__skill-value');
    const skillBar = skill.querySelector('.member__skill-bar');
    const skillBarValue = skillBar.querySelector('.member__skill-bar-value');
    const skillBarValueWidth = skillBarValue.offsetWidth;
    const skillBarValueWidthValue = skillBarValueWidth * (skillValue.innerHTML / 100);
    skillBarValue.style.width = `${skillBarValueWidthValue}px`;
  });
}