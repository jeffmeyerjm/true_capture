# Deployment Guide for truecapturestudio.com

## Step 1: Deploy to Netlify (FREE Hosting)

### Upload Your Site
1. Go to **netlify.com**
2. Click "Sign up" (use email or GitHub)
3. Once logged in, click "Add new site" → "Deploy manually"
4. **Drag and drop** your `true-capture-website` folder into the upload area
5. Wait ~30 seconds - your site is live!
6. You'll get a temporary URL like: `random-name-123.netlify.app`

---

## Step 2: Connect Your Domain (truecapturestudio.com)

### Where did you buy your domain?
Find your domain registrar (Namecheap, GoDaddy, Google Domains, etc.)

### In Netlify:
1. Click on your site
2. Go to "Domain settings"
3. Click "Add custom domain"
4. Enter: `truecapturestudio.com`
5. Click "Verify"
6. Netlify will show you DNS records to add

### In Your Domain Registrar:

#### **Option A: Use Netlify Nameservers (Easiest)**
1. Go to your domain registrar
2. Find "Nameservers" or "DNS Settings"
3. Replace existing nameservers with Netlify's:
   ```
   dns1.p03.nsone.net
   dns2.p03.nsone.net
   dns3.p03.nsone.net
   dns4.p03.nsone.net
   ```
   (Netlify will show you the exact ones to use)
4. Save changes
5. Wait 24-48 hours (usually faster)

#### **Option B: Add A Record (If you can't change nameservers)**
1. Go to DNS settings in your domain registrar
2. Add an **A Record**:
   - Host: `@` or leave blank
   - Points to: `75.2.60.5` (Netlify's load balancer)
   - TTL: 3600 or Auto
3. Add a **CNAME Record**:
   - Host: `www`
   - Points to: `your-site-name.netlify.app`
   - TTL: 3600 or Auto
4. Save changes
5. Wait 1-6 hours

---

## Step 3: Enable HTTPS (Free SSL Certificate)

1. In Netlify, go to "Domain settings"
2. Scroll to "HTTPS"
3. Click "Verify DNS configuration"
4. Once verified, click "Provision certificate"
5. Wait ~1 minute - done!

Your site will be live at: **https://truecapturestudio.com** 🎉

---

## Updating Your Site

When you need to make changes:

1. Edit your local HTML files
2. Go to Netlify → Your site → "Deploys"
3. Drag and drop the updated folder
4. New version goes live in ~30 seconds

---

## Email Setup (Optional)

Your domain doesn't come with email hosting by default. Options:

### **Free Option:**
- Use **Gmail** with your domain
- Go to Google Workspace (free trial, then ~$6/month)
- Or use Zoho Mail (free for 1 user)

### **Paid Option:**
- Most domain registrars offer email hosting (~$3-5/month)
- Example: yourname@truecapturestudio.com

For now, keep using **utahvideotransfer@gmail.com** - it works fine!

---

## Common Issues

### "Domain not connecting"
- **Wait longer:** DNS can take up to 48 hours
- **Check nameservers:** Make sure you entered them correctly
- **Clear cache:** Try browsing in incognito mode

### "Not secure" warning
- **Wait for SSL:** Certificate provisioning takes a few minutes
- **Force HTTPS:** Enable in Netlify settings

### "Site not updating"
- **Clear cache:** Hard refresh (Ctrl+F5 or Cmd+Shift+R)
- **Wait:** CDN can take 1-2 minutes to update

---

## Your Site is Now Live! 🚀

**URL:** https://truecapturestudio.com

**Next Steps:**
1. Test all pages
2. Submit to Google Search Console
3. Share with customers!

---

## Need Help?

- **Netlify Docs:** docs.netlify.com
- **Support:** Netlify has excellent community forums
- **Quick fixes:** Usually just clearing cache or waiting for DNS

---

Good luck with your launch! 🎬
