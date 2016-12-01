﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shipping.ShippingDetails.Events
{
    public interface IShippingDetailsDefinedEvent
    {
        int Id { get; set; }
        int StockItemId { get; set; }
    }
}