import React from 'react'
import { Link } from 'react-router-dom';
const navigation = [
    { name: 'PETSHOP', href: '/', current: true },
    { name: 'THÚ CƯNG', href: '/thucung', current: false },
    { name: 'PHỤ KIỆN', href: '/phukien', current: false },
    { name: 'DỊCH VỤ', href: '/dichvu', current: false },
    { name: 'TIN TỨC', href: '/tintuc', current: false },
    { name: 'LIÊN HỆ', href: '/lienhe', current: false },
  
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  
  }
const Menu = () => {
  return (
    <div className="ml-10 flex items-baseline space-x-4">
    {navigation.map((item) => (
      <Link
        key={item.name}
        to={item.href}
        className={classNames(
          item.current
            ? 'bg-amber-300 text-white '
            : 'text-gray-900 hover:bg-amber-300 hover:text-white',
          'rounded-md px-3 py-2 text-sm font-medium'
        )}
        aria-current={item.current ? 'page' : undefined}
      >
        {item.name}

      </Link>

    ))}
  </div>
  )
}

export default Menu