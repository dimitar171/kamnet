using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.OrderAggregate;

namespace Core.Specification
{
    public class OrderByPaymentIntentIdWithItemsSpecification : BaseSpecification<Order>
    {
        public OrderByPaymentIntentIdWithItemsSpecification(string paymentIntentId)
        : base(o=>o.PaymentIntentId==paymentIntentId)
        {
        }
    }
}