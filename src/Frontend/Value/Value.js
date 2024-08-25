import React, { useState } from 'react'
import { Accordion , AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel,AccordionItemState } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'


export default function Value()
 
{

    const [className , setClassName] = useState(null)
    
  return (


    <>
    
    <section className='v-wrapper' id='val'>
<div className="paddings innerWidth flexCenter v-container">

{/* left side */}

<div className="v-left">
    <div className="image-container">
        <img src="./4img.jpg"  alt="" />
    </div>
</div>

{/* right side */}

<div className="flexColStart v-right">
    <span className='orangeText'>Our Value</span>
    <span className='primaryText'>Value We Give to You</span>
<span className='secondaryText'>We always ready to help by providijng the best services for you.
    <br />
We beleive a good blace to live can make your life better
</span>

<Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[0]}>
    {
        data.map((item , i)=>
        {
            return(
                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
<AccordionItemHeading>
    <AccordionItemButton className=' flexCenter accordionButton'>

        <AccordionItemState>
            {({expanded})=>expanded 
            ? setClassName('expanded')
            :setClassName('collapsed')}
        </AccordionItemState>

        <div className="flexCenter icon">{item.icon}</div>
        <span className='primaryText'>
            {item.heading}
        </span>
        <div className="flexCenter icon">
<MdOutlineArrowDropDown size={20}/>
        </div>
    </AccordionItemButton>
</AccordionItemHeading>
<AccordionItemPanel>
    <div className="greyText">
        {item.detail}
    </div>
</AccordionItemPanel>
                </AccordionItem>
            )
        })
    }

</Accordion>

</div>

</div>
    </section>
    
    
    
    </>


  )
}
