import beckground from '../assets/bg.jpg';
import { Cound } from './Cound';
import { DescriptionAcound } from './DescriptionAcound';
import { CardImg } from './cardImg';
import { DescriptionProfile } from './DescriptionProfile';
import { ButtonNavigate } from './ButtonNavigate';

export const LayoutHome = () => {

    return (
        <main>
            <div className="bg-slate-900 relative">
                <img src={beckground} alt="baground" className="rounded-t-lg mt-[4.8rem] w-full h-44 object-cover" />
                    <div className="relative h-[26rem]">                         
                        <DescriptionProfile />
                        <div className="border border-purple mt-12"></div> 
                        <Cound />
                        <DescriptionAcound />
                        <ButtonNavigate />
                    </div>
                    <CardImg />
            </div>
        </main>
    )
}