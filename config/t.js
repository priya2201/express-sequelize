const sendRejectMailToVendor = async (message, vendor_mail_id, cc) => {
    if (vendor_mail_id) {
      const settings = await models.settings.findAll({
        where: {
          deleted: 0,
        },
      });
  
      const subject = 'INTERVIEW STATUS UPDATE';
  if(cc.length==0){
    await sendEmail(vendor_mail_id, settings[0].from_email, vendor_mail_id, subject, message);
  
  }else{
      await sendEmail(vendor_mail_id, settings[0].from_email, cc.join(','), subject, message);
  }
    } else {
      const settings = await models.settings.findAll({
        where: {
          deleted: 0,
        },
      });
  
      const subject = 'INTERVIEW STATUS UPDATE';
  
      await sendEmail('', settings[0].from_email, cc.join(','), subject, message);
    }
  }
  