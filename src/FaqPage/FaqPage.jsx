import React from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

import styles from './FaqPage.module.css';

function Item(){
    return (
        <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Как правильно учить реакт?</Accordion.Header>
                    <Accordion.Body>
                    Прежде чем изучать React, мы бы посоветовали ознакомиться с HTML, CSS и JavaScript. Вы можете изучить HTML и CSS в течение 2-3 недель, поскольку они используются для создания макетов для веб-приложений. На освоение JavaScript требуется время, поскольку это язык программирования
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>За сколкьо можно выучить реакт?</Accordion.Header>
                    <Accordion.Body>
                    Онлайн-курсы по React-разработке длятся от 6 недель до 1 года. Базовые курсы, на которых разбирают концепцию библиотеки Реакт и показывают основные возможности, рассчитаны в среднем на 2-3 месяца.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
    )
}

function FaqPage() {
    return (
        <Container>

            <h1 class="h1">FAQ - Ответы на вопросы.</h1>

            <Accordion defaultActiveKey="0" className={styles.accordion}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Вопросы про реакт?</Accordion.Header>
                    <Accordion.Body>
                        <Item/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default FaqPage