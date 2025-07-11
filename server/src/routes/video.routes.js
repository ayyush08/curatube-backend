import { Router } from 'express';
import {
    deleteVideo,
    getAllVideos,
    getVideoById,
    publishAVideo,
    togglePublishStatus,
    updateVideo,
    updateVideoViews,
} from "../controllers/video.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"
import { upload } from "../middlewares/multer.middleware.js"

const router = Router();

router
    .route("/")
    .get(getAllVideos)//done
    .post(verifyJWT,
        upload.fields([
            {
                name: "videoFile",
                maxCount: 1,
            },
            {
                name: "thumbnail",
                maxCount: 1,
            },

        ]),
        publishAVideo //done
    );

router
    .route("/:videoId")
    .get(getVideoById)//done
    .delete(verifyJWT, deleteVideo)//done
    .patch(verifyJWT, upload.single("thumbnail"), updateVideo);//done


router.route("/toggle/publish/:videoId").patch(verifyJWT,togglePublishStatus);//done

router.route('/views/:videoId').patch(verifyJWT,updateVideoViews);//done

export default router