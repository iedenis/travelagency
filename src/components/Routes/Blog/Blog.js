import React from 'react'
import BackToTopButton from '../../Layouts/BackToTopButton/BackToTopButton'
import { Container, Typography } from '@material-ui/core';
const Blog = () => {
    // const handleScroll = (e) => {

    //     console.log('scrolling');
    // }

    const Content = () => {

        return (
            <div  >
               <Typography variant='h6'> Mini:</Typography> автомобили класса мини - маленький, удобный автомобиль подходит для путешествий налегке или поездок в черте города. С данной категорией автомобиля у вас никогда не будет проблем с парковкой.<br/>
кол-во дверей от 2 до 5<br/>
кол-во мест от 2 до 4<br/>
<Typography variant='h6'> Economy:</Typography>   автомобили класса эконом, обычно подходят для двоих, максимум троих пассажиров. Данный класс это небольшой экономичный авто для не очень долгих поездок.<br/>
кол-во дверей от 2 до 5<br/>
кол-во мест от 2 до 5<br/>
<Typography variant="h6">Compact:</Typography> одна из самых популярных категорий автомобилей на прокат, соотношение цены и качества. Подходит для пар привыкших к комфорту, но не готовых тратить большие суммы на аренду авто или семей с одним ребенком.<br/>
кол-во дверей от 2 до 5<br/>
кол-во мест от 5<br/>

<Typography variant="h6">Compact Elite:</Typography> категория придуманная в Европе для небольших автомобилей с повышенным комфортом. Обычно это БМВ 1 серии, маленькие Мерседесы или Ауди.
кол-во дверей от 2 до 5<br/>
кол-во мест от 2 до 5<br/>

<Typography variant="h6">Compact Wagon: </Typography>автомобили класса компакт универсал с увеличенным багажным отсеком, назовем данную категорию королем продаж среди семей с двумя детьми и относительно большим количеством багажа.<br/>
кол-во дверей - 5<br/>
кол-во мест 5<br/>

<Typography variant="h6">Intermediate</Typography>  Комфортный семейный авто с большим салоном и вместительным багажником, если повезет в этой же категории могут дать и небольшой паркетник.<br/>
кол-во дверей от 2 до 5<br/>
кол-во мест 5<br/>

<Typography variant="h6">Full Size:</Typography>  этот класс пришел к нам конечно же из Америки и мало чем отличается от стандартного. Вы выиграете от большего пространства для ног и места в салоне, что означает, что они идеально подходят для длительных поездок с семьей.<br/>
кол-во дверей от 2 до 5<br/>
кол-во мест 5<br/>

<Typography variant="h6">Standart:</Typography> большие автомобили бизнес-класса с вместительным, большим и очень удобным салоном, а также с большим багажником. На практике обычно более экономичны, чем фул сайз.<br/>
кол-во дверей от 2 до 5<br/>
кол-во мест 5<br/>

<Typography variant="h6">Standart Wagon:</Typography>  автомобили бизнес-класса универсал, все тоже самое что и в классе стандарт, только с еще более вместительным багажником.
кол-во дверей 5<br/>
кол-во мест 5<br/>

<Typography variant="h6">SUV:</Typography>  автомобили класса кроссовер это самый маленький вид внедорожника, который можно взять напрокат. Он вмещает пять человек и четыре места для багажа. Подходит любителям сидеть повыше, что придает дополнительное преимущество обзора.<br/>
Считается, что чем выше автомобиль тем меньше устает водитель.<br/>
кол-во дверей от 2 до 5<br/>
кол-во мест 5<br/>

<Typography variant="h6">Minivan:</Typography>  минивэны очень ценятся в аренде, частенько в сезон их не найти
Благодаря наличию места для семи человек и лучшей экономии топлива, чем у больших внедорожников, минивэны, могут быть как раз подходящим транспортным средством для перевозки всей вашей семьи или группы. В некоторых выбранных местах вы можете запросить фургоны, который вмещает восемь или даже девять мест, а не семь.<br/>
кол-во дверей от 3 до 5
кол-во мест от 7 до 9

<Typography variant="h6">Premium:</Typography>  Прокат автомобилей премиум-класса предлагает удобные сидения обычно это кожа с большим количеством места для багажа. Прокатный автомобиль премиум-класса - отличный выбор для деловых поездок или отдыха.<br/>
кол-во дверей от 2 до 5<br/>
кол-во мест от 2 до 5<br/>

<Typography variant="h6">Luxury</Typography> Эта категория автомобилей,предел мечтаний любого автомобилиста. произведенные высококлассными брендами с роскошными функциями отвечающими последнему слову техники, стильный внешний вид, удобные кожаные сиденья, шикарный салон и мощный двигатель.<br/>
кол-во дверей от 2 до 5<br/>
кол-во мест от 2 до 5<br/>



            </div>)
    }
    return (
        <div style={{ flex: 1 }}>

            <Container >

                <Content />
                <BackToTopButton />

            </Container>
        </div>


    )
}

export default Blog
