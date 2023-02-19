using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metsenat.BLL.DTOs;
public class CreateSponsorDto
{
    [Required]
    public string FullName { get; set; }
    [Required]
    public string Phone { get; set; }
    [Required]
    public decimal Amount { get; set; }
    public string OrganizationName { get; set; }
}
