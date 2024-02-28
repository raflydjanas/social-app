import { Tabs, TabList, TabPanels, Tab, TabPanel, } from '@chakra-ui/react';
import IconPhoto from '../assets/icons8-photo-64.png';
import CardImg from './cardImg';
import CardVideo from './Fragments/CardVideo';
import CardBlog from './Fragments/CardBlog';

const ButtonNavigate = () => {
   return (
         <Tabs variant='soft-rounded' >
            <TabList className='p-3 bg-slate-800 mt-7 w-[90%] mx-auto rounded-full'>
               <div className='flex mx-auto'>
                  <Tab>
                     <img
                        src={IconPhoto}
                        alt=''
                        className='rounded-full h-9'
                     />
                  </Tab>
                  <Tab>
                  <img
                     src={IconPhoto}
                     alt=''
                     className='rounded-full h-9'
                  />
                  </Tab>
                  <Tab>
                  <img
                     src={IconPhoto}
                     alt=''
                     className='rounded-full h-9'
                  />
                  </Tab>
               </div>
            </TabList>
            <TabPanels>
               <TabPanel>
                  <CardImg />
               </TabPanel>
               <TabPanel>
                  <CardVideo />
               </TabPanel>
               <TabPanel>
                  <CardBlog />
               </TabPanel>
            </TabPanels>
         </Tabs>
   );
};

export default ButtonNavigate;
