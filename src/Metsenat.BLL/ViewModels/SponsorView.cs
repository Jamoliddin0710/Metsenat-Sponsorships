using Metsenat.Data.Entities.Enums;
using Metsenat.Data.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metsenat.BLL.ViewModels
{
    public class SponsorView
    {
        public string? FullName { get; set; }
        public string? PhoneNumber { get; set; }
        public ESponsorType SponsorType { get; set; }
        public string? OrganizationName { get; set; }
    }
}
