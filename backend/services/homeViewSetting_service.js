const db = require('./connectDB');
require('dotenv').config();

async function getHomeViewSetting(){
    const rows = await db.query(`SELECT * FROM homeViewSetting`);
    console.log( await rows);
  
    return await rows;
}

async function getHomeViewSettingId(data){
  const rows = await db.query(`SELECT * FROM homeViewSetting WHERE id_content= ?`,[data]);
  console.log( await rows);

  return await rows;
}

async function addHomeViewSetting(data,imagePath){
  if(imagePath == undefined){
    if (data.image_url == undefined) {
      imageurl = null;
    }else {
      imageurl = data.image_url;
    }
  }else {
    imageurl = `${process.env.REST_API_URL}/${imagePath}`;
  }

  const rows = await db.query(`INSERT INTO homeViewSetting (content, image_url) VALUE (?, ?)`,[data.content, imageurl]);
  console.log( await rows);

  return await rows;
}

async function updateHomeViewSetting(data,idHomeView){
  if(imagePath == undefined){
    if (data.image_url == undefined) {
      imageurl = null;
    }else {
      imageurl = data.image_url;
    }
  }else {
    imageurl = `${process.env.REST_API_URL}/${imagePath}`;
  }
  const rows = await db.query(`UPDATE homeViewSetting SET content=?, image_url=? WHERE id_content= ?`,[data.content, imageurl, idHomeView]);
  if(rows )
  console.log( await rows);

  return await rows;
}


async function deleteHomeViewSetting(data){
  const rows = await db.query(`DELETE FROM homeViewSetting WHERE id_content= ?`,[data]);
  console.log( await rows);

  return await rows;
}
  
  
module.exports = {
  getHomeViewSetting,
  getHomeViewSettingId,
  addHomeViewSetting,
  updateHomeViewSetting,
  deleteHomeViewSetting
}