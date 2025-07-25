jQuery(document).ready(function ($) {
    $('.header__btn').on('click', function () {
        $(this).toggleClass('active');
        $('.header-mobile').toggleClass('active');
    })

    $('.header-mobile__submenu').hide(); // hide on load

    $('.header-mobile__show').on('click', function () {
        $(this).toggleClass('active');

        const submenu = $(this).next('.header-mobile__submenu');
        submenu.slideToggle(200).toggleClass('active');
    });

    const phoneInputs = document.querySelectorAll(".phone-mask");

    phoneInputs.forEach(input => {
        window.intlTelInput(input, {
            initialCountry: "ru",
            separateDialCode: true,
            preferredCountries: ["ru", "us", "gb"],
            separateDialCode: true,
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
        });
    });


    // СЛАЙДЕР ДЛЯ БЕСКОНЕЧНОГО СКРОЛЛИНГА
    // $('.slider_infinite').slick({
    //     speed: 2000,
    //     autoplay: true,
    //     autoplaySpeed: 0,
    //     centerMode: false,
    //     cssEase: 'linear',
    //     slidesToShow: 1,
    //     draggable: false,
    //     focusOnSelect: false,
    //     pauseOnFocus: false,
    //     pauseOnHover: false,
    //     slidesToScroll: 1,
    //     variableWidth: true,
    //     infinite: true,
    //     initialSlide: 1,
    //     arrows: false,
    //     buttons: false,
    // });

    // let sliderOn = window.matchMedia("(max-width: 1200px)");
    // checkMedia(sliderOn);
    // sliderOn.addListener(checkMedia);

    // function checkMedia(sliderOn) {
    //     if (sliderOn.matches) {
    //         $('.program__items').slick({
    //             slidesToShow: 2,
    //             infinite: true,
    //             arrows: false,
    //             buttons: false,
    //             responsive: [
    //                 {
    //                     breakpoint: 768,
    //                     settings: {
    //                         slidesToShow: 1
    //                     }
    //                 }
    //             ]

    //         });
    //     }
    // }

    // checkMedia(sliderOn);


    // ДЛЯ DISABLED КНОПКИ, ЕСЛИ ЧЕКБОКС В ФОРМЕ НЕ CHECKED

    $('.mobile-menu__list ul').slideUp();

    $('ul.mobile-menu__list').on('click', 'img', function (event) {
        event.stopPropagation();

        var $ul = $(this).next('ul');
        $ul.slideToggle();

        $(this).toggleClass('active');
    });

    $('.form__confirm input').click(function () {
        var isChecked = $(this).prop('checked');
        var $submitButton = $(this).closest('.form').find('button[type="submit"]');
        $submitButton.prop('disabled', !isChecked);
    });

    // ДЛЯ ОТКРЫТИЯ МОДАЛКИ
    function openModalOrMenu(trigger, targetSelector) {
        $(trigger).addClass('active');
        $('body').css('overflow-y', 'hidden');
        $(targetSelector).on('click', function (e) {
            if (e.target === this) {
                $(this).removeClass('active');
                $('body').css('overflow-y', 'initial');
            }
        });
    }

    // ДЛЯ ЗАКРЫТИЯ МОДАЛКИ, КОГДА ПРОКЛИКАНО ЗА ПРЕДЕЛЫ МОДАЛКИ
    function closeModalOrMenu(trigger) {
        $(trigger).removeClass('active');
        $('body').css('overflow-y', 'initial');
    }

    // ДЛЯ ВЫБОРА HREF ДЛЯ МОДАЛКИ
    $('a.getModal').on('click', function (e) {
        e.preventDefault();
        let triggerHref = $(this).attr('href');
        openModalOrMenu(triggerHref, triggerHref);
    });



    // ДЛЯ ЗАКРЫТИЯ МОДАЛКИ
    $('.modal__close').on('click', function () {
        closeModalOrMenu($(this).parents('.modal'));
    });

    $('.news-modal__close').on('click', function () {
        closeModalOrMenu($(this).parents('.news-modal'));
    });

    // ДЛЯ ЗАКРЫТИЯ МОБИЛЬНОГО МЕНЮ
    $('.mobile-menu__close, .mobile-menu, .mobile-menu a').on('click', function () {
        closeModalOrMenu($(this).parents('.mobile-menu'));
    });

    // ФУНКЦИЯ ДЛЯ ТАБОВ, ЧТОБЫ ПОКАЗАТЬ ВСЕ ТАБЫ
    let tabsCheck = window.matchMedia("(max-width: 620px)");
    checkMedia(tabsCheck);
    tabsCheck.addListener(checkMedia);

    function checkMedia(tabsCheck) {
        if (tabsCheck.matches) {
        } else {
        }
    }

    checkMedia(tabsCheck);

    // toggler ДЛЯ АККОРДИОНА
    $('.accordion__item').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active')
    })

    let filterCheck = window.matchMedia("(max-width: 620px)");
    checkMedia(filterCheck);
    filterCheck.addListener(checkMedia);
    function checkMedia(filterCheck) {
        if (filterCheck.matches) {
            toggleTabs(".sectionName", 3);
        } else {
            toggleTabs(".sectionName", 8);
        }
    }

    function toggleTabs(container, threshold) {
        const items = $(`${container} .tabs__item`);
        const moreButton = $(`${container} .tabs__more`);
        if (items.length <= threshold + 1) {
            moreButton.hide();
        } else {
            items.hide().filter(`:lt(${threshold + 1})`).show();
            moreButton.show();
        }

        moreButton.off("click").on("click", function () {
            items.show();
            moreButton.hide();
        });
    }

    checkMedia(filterCheck);

    // $('.sectionName__slider').each(function (index, element) {
    //     const sectionNameSlider = new Swiper(element, {
    //         loop: true,
    //         spaceBetween: 30,
    //         slidesPerView: 4.5,
    //         centeredSlides: true,
    //         speed: 600,
    //         pagination: {
    //             el: $(element).parents('.sectionName__holder').find('.swiper-pagination').get(0),
    //             clickable: true,
    //         },
    //         navigation: {
    //             prevEl: $(element).parents('.sectionName__holder').find('.arrow--left').get(0),
    //             nextEl: $(element).parents('.sectionName__holder').find('.arrow--right').get(0),
    //         },
    //         breakpoints: {
    //             0: {
    //                 slidesPerView: 1,
    //                 spaceBetween: 10,
    //                 // autoHeight: true,
    //             },

    //             620: {
    //                 spaceBetween: 20,
    //                 slidesPerView: 2,
    //             },

    //             1024: {
    //                 spaceBetween: 20,
    //                 slidesPerView: 3,
    //             },

    //             1400: {
    //                 spaceBetween: 20,
    //                 slidesPerView: 4,
    //             },

    //             1600: {
    //                 slidesPerView: 4.5,
    //                 centeredSlides: true,
    //             },
    //         }
    //     });
    // });

    $('[data-animate]').each(function () {
        var $this = $(this);
        var animationClass = $this.data('animate');

        $this.wrap('<div class="anim ' + animationClass + '"></div>');
    });

    const observerFunction = function (itemName, thresholdValues) {
        const animBlocks = document.querySelectorAll(itemName);
        if (animBlocks.length > 0) {

            function getThreshold() {
                if (document.documentElement.clientWidth >= 992) {
                    return thresholdValues[3];
                }
                if (document.documentElement.clientWidth >= 660) {
                    return thresholdValues[2];
                }
                if (document.documentElement.clientWidth >= 480) {
                    return thresholdValues[1];
                }
                return thresholdValues[0];
            }

            const options = {
                root: null,
                rootMargin: '0px',
                threshold: getThreshold()
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, options);

            animBlocks.forEach(block => {
                observer.observe(block);
            });
        }
    };

    observerFunction('.anim', [0.05, 0.1, 0.15, 0.2]);
    observerFunction('.anim2', [0.05, 0.1, 0.2, 0.4]);
});

// SWIPER слайдеры
const teamSlider = new Swiper('.team__slider', {
    loop: true,
    spaceBetween: 50,
    slidesPerView: 4,
    speed: 600,
    navigation: {
        prevEl: ".team .arrow--left",
        nextEl: ".team .arrow--right",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        620: {
            spaceBetween: 20,
            slidesPerView: 2,
        },

        768: {
            spaceBetween: 20,
            slidesPerView: 3,
        },

        1400: {
            slidesPerView: 4,
        },


    }
});

const reviewsSlider = new Swiper('.reviews__slider', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1.2,
    speed: 600,
    navigation: {
        prevEl: ".reviews__arrow--left",
        nextEl: ".reviews__arrow--right",
    },

    breakpoints: {
        0: {
            spaceBetween: 10,
            slidesPerView: 1,
            autoHeight: true,
        },

        620: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 1.2,
            spaceBetween: 30,
        },

        1400: {
            slidesPerView: 1.2,
            spaceBetween: 30,
        },
    }
});

const openupLeft = new Swiper('#openupLeft', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    allowTouchMove: false,
    speed: 4000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});

const openupRight = new Swiper('#openupRight', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    allowTouchMove: false,
    speed: 4000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
    },
});

const studentSlider = new Swiper('.student__slider', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4,
    speed: 600,
    navigation: {
        prevEl: ".student .arrow--left",
        nextEl: ".student .arrow--right",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },

        620: {
            spaceBetween: 20,
            slidesPerView: 2,
        },

        768: {
            spaceBetween: 20,
            slidesPerView: 3,
        },

        1024: {
            spaceBetween: 20,
            slidesPerView: 4,
        },

        1600: {
            slidesPerView: 4,
        },
    }
});

const resultSlider = new Swiper('.result__slider', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3.5,
    speed: 600,
    navigation: {
        prevEl: ".result .arrow--left",
        nextEl: ".result .arrow--right",
    },

    breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },

        620: {
            spaceBetween: 20,
            slidesPerView: 2.5,
        },

        1400: {
            slidesPerView: 3.5,
        },
    }
});

const bookingSlider = new Swiper('.booking__slider', {
    loop: true,
    spaceBetween: 40,
    slidesPerView: 2,
    speed: 600,
    navigation: {
        prevEl: ".booking .arrow--left",
        nextEl: ".booking .arrow--right",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        768: {
            spaceBetween: 20,
            slidesPerView: 2,
        },

        1400: {
            slidesPerView: 2,
        },
    }
});

const sectionName_5 = new Swiper('.sectionName__slider', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    speed: 600,
    // autoplay: true,
    // autoplaySpeed: 2000,
    navigation: {
        prevEl: ".sectionName .arrow--left",
        nextEl: ".sectionName .arrow--right",
    },
    // pagination: {
    //     el: '.sectionName .swiper-pagination',
    //     clickable: true,
    // },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
            // autoHeight: true,
        },

        620: {
            spaceBetween: 20,
            slidesPerView: 2,
        },

        1024: {
            spaceBetween: 20,
            slidesPerView: 3,
        },

        1400: {
            spaceBetween: 20,
            slidesPerView: 4,
        },

        1600: {
            slidesPerView: 5,
        },
    }
});

const sectionName_4 = new Swiper('.sectionName__slider', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4,
    speed: 600,
    // autoplay: true,
    // autoplaySpeed: 2000,
    navigation: {
        prevEl: ".sectionName .arrow--left",
        nextEl: ".sectionName .arrow--right",
    },
    // pagination: {
    //     el: '.sectionName .swiper-pagination',
    //     clickable: true,
    // },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
            // autoHeight: true,
        },

        620: {
            spaceBetween: 20,
            slidesPerView: 2,
        },

        1400: {
            spaceBetween: 20,
            slidesPerView: 3,
        },

        1600: {
            slidesPerView: 4,
        },
    }
});

const sectionName_3 = new Swiper('.sectionName__slider', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    speed: 600,
    // autoplay: true,
    // autoplaySpeed: 2000,
    navigation: {
        prevEl: ".sectionName .arrow--left",
        nextEl: ".sectionName .arrow--right",
    },
    // pagination: {
    //     el: '.sectionName .swiper-pagination',
    //     clickable: true,
    // },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
            // autoHeight: true,
        },

        620: {
            spaceBetween: 20,
            slidesPerView: 2,
        },

        1400: {
            slidesPerView: 3,
        },
    }
});

const sectionName_2 = new Swiper('.sectionName__slider', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 2,
    speed: 600,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // autoHeight: true,
    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },
    navigation: {
        prevEl: ".sectionName .arrow--left",
        nextEl: ".sectionName .arrow--right",
    },
    // pagination: {
    //     el: '.sectionName .swiper-pagination',
    //     clickable: true,
    // },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        620: {
            spaceBetween: 20,
            slidesPerView: 2,
        },

        1400: {
            slidesPerView: 2,
        },
    }
});

const sectionName_1 = new Swiper('.sectionName__slider', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    speed: 600,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // autoHeight: true,
    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },
    navigation: {
        prevEl: ".sectionName .arrow--left",
        nextEl: ".sectionName .arrow--right",
    },
    // pagination: {
    //     el: '.sectionName .swiper-pagination',
    //     clickable: true,
    // },
    breakpoints: {
        0: {
            spaceBetween: 10,
            // autoHeight: true,
        },

        620: {
            spaceBetween: 20,
        },

        1400: {
            spaceBetween: 30,
        },
    }
});

let sliderContainer = document.querySelector('.sliderName .swiper-wrapper');
let slides = document.querySelectorAll('.sliderName .swiper-slide');

slides.forEach(slide => {
    let clone = slide.cloneNode(true);
    sliderContainer.appendChild(clone);
});

let sliderName = new Swiper('.sliderName', {
    spaceBetween: 30,
    centeredSlides: true,
    speed: 2500,
    autoplay: {
        delay: 1,
    },
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    disableOnInteraction: true,
    breakpoints: {
        0: {
            spaceBetween: 15,
        },
        620: {
            spaceBetween: 20,
        },
        1400: {
            spaceBetween: 30,
        },
    }
});

let marqueeLeft = new Swiper('#marqueeLeft', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 2500,
    autoplay: {
        delay: 1,
    },
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    disableOnInteraction: true
});

let marqueeRight = new Swiper('#marqueeRight', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 2500,
    autoplay: {
        delay: 1,
        reverseDirection: true
    },
    loop: true,
    loopedSlides: 4,
    slidesPerView: 'auto',
    allowTouchMove: false,
    disableOnInteraction: true
});



// ФУНКЦИЯ ДЛЯ ОТСЧЁТА ОТ 0 ДО N
function animateCounter(selector, duration = 2000) {
    const elements = document.querySelectorAll(selector);

    function startCounting(element) {
        const start = parseInt(element.dataset.counterStart, 10);
        const end = parseInt(element.dataset.counterEnd, 10);
        const increment = (end - start) / (duration / 16);
        let current = start;

        function updateCounter() {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                element.textContent = end.toFixed(0);
            } else {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            }
        }

        updateCounter();
    }

    // Use Intersection Observer to detect when elements come into view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                observer.unobserve(entry.target); // Stop observing once animation starts
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    elements.forEach(element => {
        observer.observe(element);
    });
}
animateCounter('.stats__box span', 3000);

// AOS.init();

// ДЛЯ ЗАКРЫТИЯ МОДАЛКИ, КОГДА ПРОКЛИКАНО ЗА ПРЕДЕЛЫ МОДАЛКИ - УНИВЕРСАЛЬНЫЙ
let body = document.querySelector('body')
function closeModal(modalName, reverse = false) {
    modalName = document.querySelector(modalName)
    window.addEventListener('click', function (e) {
        if (reverse) {
            if (e.target === modalName) {
                modalName.classList.remove('active')
                body.style.overflowY = 'initial'

            }
        } else {
            if (e.target !== modalName) {
                modalName.classList.remove('active')
                body.style.overflowY = 'initial'

            }
        }

    })
}
closeModal('.modal', true)
closeModal('.mobile-menu', true)


// ФУНКЦИЯ ДЛЯ ТАБОВ
function createTab(tabName, contentName) {
    tabName = document.querySelectorAll(tabName);
    contentName = document.querySelectorAll(contentName);
    let tabsArray = Array.from(tabName)
    tabsArray.map((tab, tabIndex) => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            for (let tabAll of tabName) tabAll.classList.remove('active')
            this.classList.add('active')

            for (let tabsContents of contentName) tabsContents.classList.remove('active')
            contentName[tabIndex].classList.add('active')
        })
    })
}
createTab('.naming .tabs__item', '.naming .tabs__content')

function createSelectTab(tabName, contentName, selectName) {
    tabName = document.querySelectorAll(tabName);
    contentName = document.querySelectorAll(contentName);
    const select = document.querySelector(selectName);

    if (select) {
        let tabsArray = Array.from(tabName);
        tabsArray.map((tab, tabIndex) => {
            tab.addEventListener('click', function (e) {
                e.preventDefault();
                for (let tabAll of tabName) tabAll.classList.remove('active');
                this.classList.add('active');

                for (let tabsContents of contentName) tabsContents.classList.remove('active');
                contentName[tabIndex].classList.add('active');
                select.selectedIndex = tabIndex;
            });
        });

        select.addEventListener('change', function () {
            let selectedIndex = this.selectedIndex;

            for (let tabAll of tabName) tabAll.classList.remove('active');
            for (let tabsContents of contentName) tabsContents.classList.remove('active');

            tabName[selectedIndex].classList.add('active');
            contentName[selectedIndex].classList.add('active');
        });
    }
}
createSelectTab('.stages .tabs__item', '.stages .tabs__content', '.stages__select')
createSelectTab('.ideal .tabs__item', '.ideal .tabs__content', '.ideal .stages__select')

// ФУНКЦИЯ ДЛЯ АККОРДИОНОВ - УНИВЕРСАЛЬНЫЙ
function createAccordion(target, content, singleOn, startFrom) {
    const style = document.createElement('style');
    style.innerHTML = `
        .accordion-style {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.2s ease-out;
        }
    `;
    document.head.appendChild(style);

    target = document.querySelectorAll(target);
    content = document.querySelectorAll(content);

    for (let contentItem of content) {
        let parentElement = document.createElement('div');
        parentElement.classList.add('accordion-content');
        contentItem.parentNode.insertBefore(parentElement, contentItem);
        parentElement.appendChild(contentItem);
        parentElement.classList.add('accordion-style');
    }

    if (target[startFrom]) {
        target[startFrom].classList.add('active');
        let nextElement = target[startFrom].nextElementSibling;
        nextElement.style.maxHeight = nextElement.scrollHeight + "px";
    }

    if (singleOn) {
        for (let targetItem of target) {
            targetItem.addEventListener('click', function () {
                for (let targetItem of target) {
                    targetItem.classList.remove('active');
                    targetItem.nextElementSibling.style.maxHeight = null;
                }

                this.classList.toggle('active');
                let itemContent = this.nextElementSibling;

                if (itemContent.style.maxHeight) {
                    itemContent.style.maxHeight = null;
                } else {
                    itemContent.style.maxHeight = itemContent.scrollHeight + "px";
                }
            });
        }
    } else {
        for (let targetItem of target) {
            targetItem.addEventListener('click', function () {
                this.classList.toggle('active');
                let itemContent = this.nextElementSibling;

                if (itemContent.style.maxHeight) {
                    itemContent.style.maxHeight = null;
                } else {
                    itemContent.style.maxHeight = itemContent.scrollHeight + "px";
                }
            });
        }
    }
}
createAccordion('.header-mobile__trigger', '.header-mobile__hidden', false);

class PhoneInputFormatter {
    constructor(input) {
        this.input = input;
        this.initEvents();
    }

    getInputNumbersValue() {
        return this.input.value ? this.input.value.replace(/\D/g, "") : "";
    }

    onPhonePaste(e) {
        const inputNumbersValue = this.getInputNumbersValue();
        const pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            const pastedText = pasted.getData("Text");
            if (/\D/g.test(pastedText)) {
                this.input.value = inputNumbersValue;
            }
        }
    }

    onPhoneInput(e) {
        let inputNumbersValue = this.getInputNumbersValue(),
            selectionStart = this.input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return (this.input.value = "");
        }

        if (this.input.value.length !== selectionStart) {
            if (e.data && /\D/g.test(e.data)) {
                this.input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].includes(inputNumbersValue[0])) {
            if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
            const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
            formattedInputValue = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
        }
        this.input.value = formattedInputValue;
    }

    onPhoneKeyDown(e) {
        const inputValue = this.input.value.replace(/\D/g, "");
        if (e.keyCode === 8 && inputValue.length === 1) {
            this.input.value = "";
        }
    }

    initEvents() {
        this.input.addEventListener("keydown", e => this.onPhoneKeyDown(e));
        this.input.addEventListener("input", e => this.onPhoneInput(e), false);
        this.input.addEventListener("paste", e => this.onPhonePaste(e), false);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('input[type="tel"]').forEach(input => {
        if (input) {
            new PhoneInputFormatter(input);
        }
    });
});

Fancybox.bind("[data-fancybox]", {
});

// ДЛЯ ОТОБРАЖЕНИЯ КАРТЫ
function initMap(mapElement) {
    let coordinates = mapElement.dataset.coor.split(',').map(Number);
    let hintContent = mapElement.dataset.hint;

    let myMap = new ymaps.Map(mapElement, {
        center: coordinates,
        zoom: 15,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });

    let myPlacemark = new ymaps.Placemark(
        coordinates,
        {
            hintContent: hintContent
        },
        {
            preset: 'islands#dotIcon',
            iconColor: '#51AC30'
        }
    );

    myMap.behaviors.disable('scrollZoom');
    myMap.controls.add('zoomControl');
    myMap.controls.add('rulerControl', {
        scaleLine: false
    });

    myMap.geoObjects.add(myPlacemark);
}

document.addEventListener('DOMContentLoaded', function () {
    let mapElements = document.querySelectorAll('.map');
    let observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                ymaps.ready(() => initMap(entry.target));
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    mapElements.forEach(mapElement => observer.observe(mapElement));
});



// ФУНКЦИЯ ДЛЯ КАСТОМНОЙ КНОПКИ input[type='file']  
let fileTriggers = document.querySelector('.form__upload .btn')
if (fileTriggers) {
    let fileInput = document.querySelector('.form__upload input')
    let fileName = document.querySelector('.form__filename')

    fileTriggers.addEventListener("click", function (e) {
        e.preventDefault();
        fileInput.click();
    });

    fileInput.addEventListener("change", function () {
        if (fileInput.files.length > 0) {
            fileName.innerText = fileInput.files[0].name;
        }
        else {
            fileName.innerText = "";
        }
    });
}

document.querySelectorAll('.custom-select').forEach((select) => {
    const current = select.querySelector('.custom-select__current');
    const hiddenInput = select.querySelector('.custom-select__hidden');
    const list = select.querySelector('.custom-select__list');
    const items = select.querySelectorAll('.custom-select__item');

    const initialItem = Array.from(items).find(item => item.dataset.value === hiddenInput.value);
    if (initialItem) {
        current.textContent = initialItem.textContent.trim();
    }

    current.addEventListener('click', () => {
        select.classList.toggle('open');
    });

    items.forEach((item) => {
        item.addEventListener('click', () => {
            const value = item.dataset.value;
            const text = item.textContent.trim();

            hiddenInput.value = value;
            current.textContent = text;
            select.classList.remove('open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const popovers = document.querySelectorAll('.ideal__popover');

    if (!popovers.length) return;

    popovers.forEach(popover => {
        const icon = popover.querySelector('.ideal__icon');

        icon.addEventListener('click', (e) => {
            e.stopPropagation();

            popovers.forEach(p => p.classList.remove('active'));

            popover.classList.add('active');
        });
    });

    document.addEventListener('click', () => {
        popovers.forEach(p => p.classList.remove('active'));
    });

    popovers.forEach(popover => {
        const drop = popover.querySelector('.ideal__drop');
        drop.addEventListener('click', e => e.stopPropagation());
    });
});
