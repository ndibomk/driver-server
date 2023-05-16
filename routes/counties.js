
import TourModal from "../models/products.js";
import MessageModal from "../models/Message.js";
import express from "express";
import moment from "moment/moment.js";



const router = express.Router();


router.get ('/nairobi',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Nairobi'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/kajiando',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Kajiando'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/nakuru',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Nakuru'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/bungoma',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Bungoma'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/kakamega',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Kakamega'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/kiambu',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Kiambu'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/kisii',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Kisii'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/kisumu',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Kisumu'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/kitui',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Kitui'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/laikipia',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Laikipia'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/machakos',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Machakos'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/meru',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Meru'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/mombasa',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Mombasa'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/muranga',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Muranga'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/nandi',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Nandi'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/nyandarua',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Nyandarua'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/nyeri',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Nyeri'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/nairobi',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Nairobi'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/transnzoia',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Trans-Nzoia'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/turkana',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Turkana'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/uasingishu',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Uasin Gishu'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/nairobi',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await TourModal.aggregate([
            { $match : { location:'Nairobi'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/m1',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-12)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await MessageModal.aggregate([
            { $match : { location:'Nairobi'} },
            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})



export default router