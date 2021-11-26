import React from 'react'

const NETWORK_LOGOS: Record<string, { width: number, height: number }> = {
  'nbatv': {
    width: 40,
    height: 40
  },
  'espn': {
    width: 40,
    height: 40
  },
  'tnt': {
    width: 40,
    height: 40
  }
}

function isValidLogoFilename(name: string | undefined): name is string {
  return name !== undefined && NETWORK_LOGOS[name] !== undefined;
}

export default function NetworkLogo({ name }: { name: string | undefined }) {
  const serializedName= name?.toLowerCase().replace(/ /g, '');
  if (isValidLogoFilename(serializedName)) {
    const logoInfo = NETWORK_LOGOS[serializedName]
    return (
      <img src={`/networks/${serializedName}.png`}
        alt={name}
        width={logoInfo.width}
        height={logoInfo.height}
      />
    )
  } else {
    return <></>
  }
}