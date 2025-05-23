import { Router } from 'express';
import {
    createTweet,
    deleteTweet,
    getUserTweets,
    updateTweet,
} from "../controllers/tweet.controller.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router();
router.use(verifyJWT); 

router.route("/").post(createTweet);//done
router.route("/user/:userId").get(getUserTweets);//done
router.route("/:tweetId")
.patch(updateTweet)//done
.delete(deleteTweet);//done

export default router