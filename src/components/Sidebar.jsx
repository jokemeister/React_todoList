import React from 'react';

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar__header">
                <svg className="sidebar__header__logo" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.7506">
                        <path opacity="0.7506" d="M30.5974 9.34887C30.7261 10.9841 30.5974 12.246 31.3697 14.6151L0.000976562 14.4477C4.73783 11.8339 6.41117 10.3146 8.32908 8.67932L30.5974 9.34887Z" fill="#34A853"/>
                        <path opacity="0.7506" d="M23.6592 2.43381C25.6158 4.76435 27.0832 5.98757 29.207 7.71294L4.32568 4.93174C6.44954 3.42525 6.12775 3.50251 8.8952 2.2793L23.6592 2.43381Z" fill="#5C86F2"/>
                        <path opacity="0.7506" d="M31.5371 17.6412C31.7817 18.6584 28.5895 21.2336 28.3063 22.3023L1.58427 22.5855C1.50704 21.5683 7.26077 18.4137 7.38948 17.3579L31.5371 17.6412Z" fill="#FBBC05"/>
                        <path opacity="0.7506" d="M5.88379 26.2678L27.1739 27.1691C24.5609 28.8816 22.8489 29.2164 21.2142 29.989L7.64724 29.7057C5.88379 27.9803 6.61749 28.5984 5.88379 26.2678Z" fill="#EA4335"/>
                    </g>
                    <path d="M4.37793 4.93246C6.4503 2.92381 9.11478 1.21131 12.1783 0.516013C15.2418 -0.179287 18.3053 -0.217915 21.047 0.6834L4.37793 4.93246Z" fill="#5C86F2"/>
                    <path d="M23.6595 2.43372C25.822 3.74706 27.8686 5.49819 29.2201 7.69997L0.000976562 14.447C0.245542 11.8718 1.10796 9.42535 2.49812 7.33945L23.6595 2.43372Z" fill="#34A853"/>
                    <path d="M0.130371 16.379L30.5724 9.34875C31.0229 10.2887 31.3447 11.3059 31.5892 12.3746C31.8338 13.4433 31.9625 14.4991 32.0011 15.5678L1.59777 22.5852C1.14725 21.6453 0.825453 20.6281 0.580887 19.5594C0.284834 18.5035 0.168987 17.4348 0.130371 16.379Z" fill="#FBBC05"/>
                    <path d="M2.33057 24.388L31.5369 17.641C31.2923 20.2162 30.4299 22.6626 29.0397 24.7485L7.64665 29.6929C5.50992 28.3924 3.68211 26.5898 2.33057 24.388Z" fill="#EA4335"/>
                    <path d="M10.3755 31.0448L27.1733 27.1692C25.1267 29.2937 22.4364 30.8903 19.3729 31.5856C16.2579 32.3067 13.1558 32.062 10.3755 31.0448Z" fill="#5C86F2"/>
                </svg>
                <div className="sidebar__header__text-block">
                    <p className="sidebar__header__tool">Onboarding Tool</p>
                    <p  className="sidebar__header__developer">Software Planet Group</p>
                </div>
            </div>
            <ul className="sidebar__list">
                <li className="sidebar__list-item default-list is-active">
                    <span>Поточні завдання</span>
                    <button className="list__remove cross-btn">
                        <svg className="list__remove-svg cross-btn__svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 348.3 348.3" xmlSpace="preserve" enableBackground="new 0 0 348.333 348.334" fill="currentColor">
                            <path d="M336.6 68.6 231 174.2l105.6 105.5a40.2 40.2 0 0 1-56.9 56.9L174.2 231 68.6 336.6a40 40 0 0 1-56.8 0 40.2 40.2 0 0 1 0-56.9l105.5-105.5L11.8 68.6a40.2 40.2 0 0 1 56.8-56.8l105.6 105.5L279.7 11.8a40.2 40.2 0 0 1 56.9 56.8z"/>
                        </svg>
                    </button>
                </li>

                <template className="sidebar__list-item-template">
                    <li className="sidebar__list-item">
                    <span className="sidebar__list-item__title">Поточні завдання</span>
                        <button className="list__remove cross-btn">
                            <svg className="list__remove-svg cross-btn__svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 348.3 348.3" xmlSpace="preserve" enableBackground="new 0 0 348.333 348.334" fill="currentColor">
                                <path d="M336.6 68.6 231 174.2l105.6 105.5a40.2 40.2 0 0 1-56.9 56.9L174.2 231 68.6 336.6a40 40 0 0 1-56.8 0 40.2 40.2 0 0 1 0-56.9l105.5-105.5L11.8 68.6a40.2 40.2 0 0 1 56.8-56.8l105.6 105.5L279.7 11.8a40.2 40.2 0 0 1 56.9 56.8z"/>
                            </svg>
                        </button>
                    </li>
                </template>
            </ul>
            <form className="sidebar__addList-block" name="list">
                <label className="sidebar__addList-block__label">
                    <input className="sidebar__addList-block__input" type="text" placeholder="Назва списку" name="name" />
                    <span className="sidebar__addList-block__error-msg error-msg">Обов'язкове поле</span>
                </label>
                <button type="submit" className="btn btn-blue sidebar__addList-block__btn">Додати список</button>
            </form>

            <div className="sidebar__footer">
                <span className="sidebar__footer__logo"></span>
                <p className="sidebar__footer__user">Коваленко А.</p>
                <svg className="sidebar__footer__exit" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0599 16.5H2.23633C1.68404 16.5 1.23633 16.0523 1.23633 15.5V2.5C1.23633 1.94772 1.68404 1.5 2.23633 1.5H10.0599M6.53045 9H12.2657H18.001M18.001 9L13.5893 5.47059M18.001 9L13.5893 12.0882" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
            </div>
        </aside>
    )
}