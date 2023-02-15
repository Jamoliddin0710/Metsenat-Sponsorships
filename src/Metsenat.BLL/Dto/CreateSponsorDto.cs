using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metsenat.BLL.Dto
{
    public class CreatesponsorDto
    {
        public string FullName { get; set; }
        public string Phone { get; set; }
        public Decimal Amount { get; set; }
        public string Organization { get; set; }
    }
}
