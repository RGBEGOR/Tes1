import { defineStore } from 'pinia';
import { reactive } from 'vue';
import diplomFrontend from '@/assets/files/Diploma-Egor.pdf';

const LEARNING = 'education';
const WORK = 'work';

export const useExperienceStore = defineStore('experience', () => {
  const works = reactive(
    [
      {
        id: 1,
        isOpen: false,
        type: LEARNING,
        timeInterval: 'Сентябрь 2013 — Май 2017 (4 годп)',
        position: 'Студент',
        company: ' в Педагогическом Университете им Низами (ТГПУ)',
        companyLink: 'https://www.tdpu.uz/ru',
        description: `Получил высшее образование на факультете "Методика преподования истории"`,
      },
      {
        id: 2,
        isOpen: false,
        type: WORK,
        timeInterval: 'Сентябрь 2017 — Фефраль 2019 (7 месяцев)',
        position: 'Учитель истории',
        company: ' Школе 50/60',
        companyLink: 'https://www.facebook.com/GoetheSchule60Tashkent/',

      },
      {
        id: 3,
        isOpen: false,
        type: WORK,
        timeInterval: 'Ноябрь 2022 — по сей день ',
        position: 'Учитель истории ',
        company: ' в "HOY DREAM SCHOOL"',
        companyLink: 'https://www.facebook.com/dreamschooluz/',
        description: `Учитель истории и воспитания `,
      },
      {
        id: 4,
        isOpen: true,
        type: LEARNING,
        timeInterval: 'Май 2023 — Март 2024 (10 месяцев)',
        position: 'Обучающийся',
        company: ' в "Proweb"',
        companyLink: 'https://proweb.uz/courses/web-development/',
        description: `Прохождение курса "Web-програмирование".
          <br>
          <br>
          <a class="btn-reset btn download-link"
            href="${diplomFrontend}" download>Скачать диплом</a>`,
      },
    ].reverse()
  );

  function toggleWork(currentWork) {
    currentWork.isOpen = !currentWork.isOpen;
    works.forEach((work) => {
      if (work.id !== currentWork.id) {
        work.isOpen = false;
      }
    });
  }

  return { works, toggleWork };
});
