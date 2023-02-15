using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metsenat.BLL.DTOs;
public class CreateSponsorDto
{
    public string FullName { get; set; }
    public string Phone { get; set; }
    public decimal Amount { get; set; }
    public string OrganizationName { get; set; }
}
