// console.log('JSTest');
$(() => {
  const $experience = $('.experience');
  const $nonExperience = $('.nonExperience');
  const experienceHeight = $experience.height();
  const $window = $('window');

  setHeight();
  function setHeight(){
    $nonExperience.css({
      'height': experienceHeight
    });
  }

  $window.on('resize', setHeight);
});
