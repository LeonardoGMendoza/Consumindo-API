using System;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Model
{
    public class Student
    {
        [Key]
        public int Id { get; set; }
        public string StudentName { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public decimal Height { get; set; }
        public float Weight { get; set; }
        public int Nota { get; set; }
    }
}
