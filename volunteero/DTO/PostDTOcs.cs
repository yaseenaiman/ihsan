namespace volunteero.DTO
{
    public class PostDTO
    {
        public int ApprovedPostID { get; set; }
        public string Postname { get; set; }
        public string Postdescribtion { get; set; }
        public string UpdateBy { get; set; }
        public string userID { get; set; }
        public DateTime CreateDate { get; set; }
        public bool Status { get; set; }
        public string PostImage { get; set; }
        public int NumberOfLikes { get; internal set; }
    }

}
