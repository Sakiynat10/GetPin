import Image from 'next/image'
import React from 'react'

const TrainBtn = () => {
  return (
    <>
                <div className="train-card">
                <div className="train-date-contents">
                    <div className="train-date">
                        <p>28 декабр</p>
                        <span className="line"></span>
                        <p>16:00</p>
                    </div>
                </div>
                <h1>То что вам удобна это —ux-дизайн <span></span></h1>
                <div className="trainers">
                    <div className="trainer-img">
                        <Image fill src="/card-img-1.png" alt="card-img-1" />
                    </div>
                    <div className="trainer-img">
                        <Image fill src="/card-img-2.png" alt="card-img-2" />
                    </div>
                </div>
                <div className="training-infos">
                    <div className="train-places">
                        <span>Месть:</span>
                        <p>46/90</p>
                    </div>
                    <div className="train-price">
                        <span>Цена:</span>
                        <p>50 000uzs</p>
                    </div>
                    <div className="train-location">
                        <span>Адресс:</span>
                        <p>улица Сакичмон, 1, Ташкент</p>
                    </div>
                    <span className='train-subtitle'>Дата публикации: <span>23 Июнь 2024</span></span>
                </div>
            </div>
    </>
  )
}

export default TrainBtn