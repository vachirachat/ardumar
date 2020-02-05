import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

export default function SecondSheet() {
  

  return (
    <div>
      <Card style={{backgroundColor:'#FAA423',padding:'5%'}}>
        <div style={{display:'flex'}}>
        <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0" 
          style={{marginLeft:'5%',marginRight:'5%'}}></iframe>
        <div style={{color:'white',width:'50%'}}>
          <h1 className="thai h1" style={{margin:'12px'}}>Adurino คืออะไร</h1>
          <p>            แคปกุนซือ ฟรุตแล็บ วิลเลจสงบสุขซาตาน บลอนด์เดชานุภาพยนตรกรรมเกรดสโรชา 
 เปปเปอร์มินต์โบว์ลิ่งไคลแมกซ์แฮมเบอร์เกอร์ สไปเดอร์แช่แข็งแฟลช ไอเดียเฉิ่ม ป๋า เย้ว 
 สหรัฐแพทเทิร์นรีโมทแตงกวา เจไดวอล์กแต๋วคอนโดไกด์ เพนตากอนมาร์ชแซมบ้า 
 รวมมิตรผลไม้บ๊วยแชมพูมอบตัว แพลน สะบึมส์ กุนซือฟินิกซ์สกายเทวาติ๋ม
 เฟรชชี่ไอซ์ชินบัญชร มินท์สุริยยาตร์เฟรมปัจเจกชน ฟรุต คอมเพล็กซ์ คาแร็คเตอร์สังโฆเซาท์  
 ท็อปบู๊ทชินบัญชร วิลเลจ ปอดแหกซูโม่วีนซีอีโอไฟต์ โมหจริตรูบิกภูมิทัศน์เหมย
 เซ็กส์เซ็กส์ออทิสติก คัตเอาต์ วิภัชภาคมอคคา ศึกษาศาสตร์เปโซกรุ๊ปมหภาคจ๊าบ 
 เพียบแปร้รัม แอลมอนด์ริคเตอร์ รีไซเคิลแอลมอนด์สปายนิวแมคเคอเรล
 เจ๊าะแจ๊ะไอเดียมือถือแป๋ว เฟิร์มเซฟตี้กาญจนาภิเษกเจ๊ ตรวจสอบอีสต์ 
</p>
        </div>
        </div>
      </Card>
    </div>
  );
}