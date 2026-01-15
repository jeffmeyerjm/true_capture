# True Capture Website

Professional archival video transfer service website for True Capture.

## Overview

True Capture is a preservation-focused video transfer service specializing in archival-quality digitization of VHS, Hi8, Video8, Digital8, and MiniDV tapes. This website showcases the professional workflow, equipment, and services offered.

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with responsive design
- **Vanilla JavaScript** - No frameworks, lightweight interactions
- **Static Site** - No build tools required

## File Structure

```
true-capture-website/
├── index.html                          # Homepage
├── archival-workflow.html              # Workflow explanation page
├── order-services.html                 # Order/quote request page
├── delivery-formats.html               # File delivery & format options
├── styles.css                          # Main stylesheet
├── script.js                           # JavaScript interactions
├── signal_waveform_black.svg          # Waveform separator graphic
├── true_capture_wordmark_black.svg    # Logo/wordmark
├── tc_studio_black.webp               # Footer logo
├── vhs.webp                           # VHS tape image
├── hi8.webp                           # Hi8 tape image
├── minidv.webp                        # MiniDV tape image
├── vhsc.webp                          # VHS-C tape image
└── favicon files                       # Various favicon formats
```

## Key Pages

### Homepage (index.html)
- Hero section with value proposition
- Three feature cards (Preservation First, Professional Hardware, Files That Make Sense)
- Tape format accordion
- Comparison section (True Capture vs. Other Services)

### Archival Workflow (archival-workflow.html)
- Side-by-side workflow comparison
- Equipment list with specific model numbers
- Technical explanation of the capture process

### Delivery Formats (delivery-formats.html)
- File delivery options (customer-provided, loaner drive, purchase)
- File format cards (FFV1, ProRes, MP4)
- File size guidelines

### Order Services (order-services.html)
- Google Forms integration for quotes
- Contact information
- Direct email/phone options

## Setup Instructions

1. **Extract the files** to your web server directory
2. **No build process required** - files are ready to serve
3. **Test locally** by opening index.html in a browser
4. **Deploy** to your web host (upload all files maintaining structure)

## Customization Guide

### Contact Information
- **Email:** Update in `order-services.html` contact section
- **Phone:** Update in `order-services.html` contact section
- **Location:** Update in footer and contact sections

### Colors
Main colors defined in `styles.css`:
- Background: `#000` (pure black)
- Primary accent: `#48c6ef` (cyan)
- Gradient: `linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)`
- Text: `#fff` (white), `#aaa` (muted)

### Navigation
Edit navigation links in the `<nav>` section of each HTML file.

### Content Updates
- **Equipment:** Update in `archival-workflow.html`
- **Services:** Update in `index.html` and service pages
- **Pricing:** Managed through Google Form

## Features

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 480px (phone)
- Collapsible mobile navigation

### Accessibility
- ARIA labels
- Keyboard navigation support
- Focus states
- Semantic HTML
- Alt text on images

### Performance
- Lightweight (no frameworks)
- Optimized images (WebP format)
- Minimal JavaScript
- Static HTML (fast loading)

### Interactive Elements
- Mobile navigation toggle
- Format accordion (tape types)
- Smooth scroll behavior
- Hover states on cards and buttons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Maintenance

### Regular Updates Needed
- Equipment list (if hardware changes)
- Contact information
- Pricing (via Google Form)
- Service offerings

### Content That Should Remain Static
- Brand colors and styling
- Workflow explanation
- Technical terminology
- Logo and branding

## Contact Information

**True Capture**
- Email: utahvideotransfer@gmail.com
- Phone/Text: 801-810-8315
- Location: Utah, USA

## Design Philosophy

The website follows a **preservation-first, signal-first** design philosophy:
- Professional, not trendy
- Educational, not marketing-heavy
- Technical accuracy over simplification
- Broadcast/analog aesthetic (waveforms, signal processing imagery)

## Notes

- Google Forms embedded for order requests
- Email protection removed for direct mailto links
- Cache-busting parameters on CSS (`?v=3`) for updates
- Footer contains Easter egg (brick breaker game link)

## Version History

- **v3** - January 2025: Delivery formats page redesign, spacing adjustments
- **v2** - Initial professional design with equipment details
- **v1** - Original site launch

## Support

For technical issues or questions about the website, contact the site administrator.

For service inquiries, use the order form or contact information provided above.

---

© 2025 True Capture. All rights reserved.
