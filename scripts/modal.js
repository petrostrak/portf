$(document).ready(function() {
  // MODAL
  var modalText = {
    discover: {
      title: 'React project',
      tag: 'USING REOUTER REDUX AND HOOKS.',
      detail:
        'A single-page web-application using React framework with Router, Redux and Hooks. In this project I implemented google authentication for logging into the application and set up firebase for storing the data in online database. Aside from HTML and JSX, SCSS is used for implementing the styles. The development of this app has been organised with webpack.',
      link: 'https://react-project-no1.herokuapp.com/'
    },
    ordering: {
      title: 'An introduction to React',
      tag: 'FIRST INTRODUCTION TO REACT-JS.',
      detail:
        'This was my first project using React framework. It is a simple single-page application where you can type into an array a pastime and do some basic functions such as edit and/ or delete elements of the array. At the end, you can randomly pick an element of the array to appear on a pop-up window. Aside from HTML and JSX, SCSS is used for implementing the styles. The development of this app has been organised with webpack.',
      link: 'https://react-project-no0.herokuapp.com/'
    },
    newrelic: {
      title: 'Spring Boot Application',
      tag: 'SUPPORTS TOKER BASED AUTHENTICATION.',
      detail:
        'A Spring Boot application architecture with Spring Security that works with JSON web tokens. Spring Data JPA interact also with MySQL database. The front-end is structured with React-js framework, LocalStorage, React Router and Axios. The project (client-server-database) is bundled and running with Docker compose.',
      link: 'https://github.com/petrostrak/Spring-Boot-Token-based-Authentication-with-Spring-Security-JWT'
    },
    roambi: {
      title: 'AirSense',
      tag: 'SPRINGBOOT APPLICATION.',
      detail:
        'AirSense is an air quality IoT sensors e-shop and data visualization service and my first collaborate work with Agile (SCRUM) methodology. It is structured with REST API architecture. The back-end is set up with Spring Boot, JPA and Hibernate while the front-end with React-js, Bootstrap and CSS. The application implements chat using Websockets, Paypal transactions and SMTP Mail service. Last but not least, a python script generates dummy data and store them to MySQL and Grafana analyse and visualize them on the application.',
      link: 'http://173.249.63.213:88'
    },
    walker: {
      title: 'Silver Spoon Application',
      tag: 'ANGULAR-JS APPLICATION.',
      detail:
        'An AngularJs web-application where the user can store food recipes in firebase. For this application I used NgRoute for the communication of the components, NgForms, NgHttp for the requests to the database, Subjects as well as Lazy Loading in order to minimize the load of the app.',
      link: 'https://silver-spoon-2e1cf.web.app/auth',
      },
    powur: {
      title: 'Chat Application',
      tag: 'NODE-JS APPLICATION.',
      detail:
        'A node.js chat-application. It gives the user the freedom to choose an individual private room to join and chat with others. The back-end is written in Node.js taking advantage of the socket.io library and the front-end is rendered by a simplistic HTML / CSS.',
      link: 'https://petros-chat-app.herokuapp.com/'
    },
    mystand: {
      title: 'Weather Application',
      tag: 'NODE-JS APPLICATION.',
      detail:
        'A node.js web-application where the user can search the weather forecast. It makes http calls to Open Weather Map API and renders the result on the screen. The back-end is written in Node.js and the front-end is rendered by a simplistic HTML / CSS.',
      link: 'https://petros-weather-app.herokuapp.com/'
    },
    spotify: {
      title: 'Spotify clone app',
      tag: 'PHP APPLICATION.',
      detail:
        'A Spotify-like web application for music streaming, using registretion, search for all artists / albums / songs, create and customize own playlists and control the music with all the usual controls such as play, pause, skip, previous, shuffle, repeat etc. This web application is built with HTML, CSS, PHP, JQuery, JavaScript and MySQL.',
      link: 'https://github.com/petrostrak/Spotify',
    },
    never: {
      title: 'Task Manager Application',
      tag: 'NODE-JS APPLICATION.',
      detail:
        'A node.js Task Manager Rest API. It implements user authentication with email/ password, supports email notification and database datastorage file-upload in MongoDB.',
      link: 'https://github.com/petrostrak/Task-Manager-App',
    }
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
