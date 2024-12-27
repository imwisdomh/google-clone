const avatar = document.querySelector('.header__avatar');
const avatarChange = document.querySelector('#avatar-change');

avatar.addEventListener('click', function () {
  avatarChange.click();
});

avatarChange.addEventListener('change', function (e) {
  const img = e.target.files[0];
  if (img.size <= 2 * 1024 * 1024 && img.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const base64Img = e.target.result;
      localStorage.setItem('img', base64Img);
      avatar.src = base64Img;
    };
    reader.readAsDataURL(img);
  } else {
    alert('이미지 크기는 2MB를 초과할 수 없습니다.');
  }
});

const savedImg = localStorage.getItem('img');
if (savedImg) {
  avatar.src = savedImg;
}
