import cron from 'node-cron';
import { deleteOldUserOTPs } from './user-otp.service';

const initializeUserOTPDeleteScheduler = () => {
    cron.schedule('0 0 0 * * *', async () => {
        try {
            console.log('******************************* Started - UserOTP Delete Scheduler ******************************* ', new Date());
            await deleteOldUserOTPs();
            console.log('******************************* Completed - UserOTP Delete Scheduler ******************************* ', new Date());
        } catch (error) {
            console.log(error);
            console.log('******************************* Error - UserOTP Delete Scheduler ******************************* ', new Date());
        }
    });
}

export const initializeSchedulers = () => {
    initializeUserOTPDeleteScheduler();
}
