﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metsenat.BLL.Dto
{
    public class CreateSponsorDto
    {
        public string FullName { get; set; }
        public string Phone { get; set; }
        public Decimal Amount { get; set; }
        public string OrganizationName { get; set; }
    }
}