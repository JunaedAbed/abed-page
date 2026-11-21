#!/usr/bin/env python3
"""Regenerate public/Md_Junaed_Abed_CV.pdf.

Usage: python3 scripts/generate_cv.py
Requires: reportlab (pip install reportlab)

Keep the A&E bullets below identical to `aeBullets` in pages/index.js.
"""
import os
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (HRFlowable, KeepTogether, Paragraph,
                                SimpleDocTemplate, Spacer, Table, TableStyle)

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "Md_Junaed_Abed_CV.pdf")

NAVY = colors.HexColor("#1b2a5e")
GREY = colors.HexColor("#555555")
LIGHT = colors.HexColor("#777777")

name = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=20, leading=24, textColor=NAVY)
role = ParagraphStyle("role", fontName="Helvetica", fontSize=10, leading=13, textColor=GREY)
contact = ParagraphStyle("contact", fontName="Helvetica", fontSize=7.5, leading=10.5, textColor=GREY)
h = ParagraphStyle("h", fontName="Helvetica-Bold", fontSize=10, leading=13, textColor=NAVY, spaceBefore=9, spaceAfter=1)
body = ParagraphStyle("body", fontName="Helvetica", fontSize=8.5, leading=11.5, alignment=TA_LEFT)
company = ParagraphStyle("company", parent=body, fontName="Helvetica-Bold")
date = ParagraphStyle("date", parent=body, fontName="Helvetica-Bold", fontSize=7.5, textColor=LIGHT, alignment=2)
title = ParagraphStyle("title", parent=body, fontName="Helvetica-Oblique", textColor=GREY)
bullet = ParagraphStyle("bullet", parent=body, leftIndent=12, bulletIndent=2, spaceAfter=1)
pub = ParagraphStyle("pub", parent=body, spaceAfter=4)


def section(text):
    return [Paragraph(text, h), HRFlowable(width="100%", thickness=0.8, color=NAVY, spaceAfter=4)]


def bullets(items):
    return [Paragraph(t, bullet, bulletText="•") for t in items]


def job(co, when, ttl, stack, items):
    t = Table([[Paragraph(co, company), Paragraph(when, date)]], colWidths=[None, 1.6 * inch])
    t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "BOTTOM"), ("LEFTPADDING", (0, 0), (-1, -1), 0),
                           ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 4),
                           ("BOTTOMPADDING", (0, 0), (-1, -1), 0)]))
    return [t, Paragraph(ttl, title), Paragraph(f"<b>Tech Stack:</b> {stack}", body)] + bullets(items)


# A&E bullets: keep identical to aeBullets in pages/index.js
AE_BULLETS = [
    "Maintain and extend <b>Nexoura AI</b>, the company's AI chatbot (ASP.NET Core backend, Flutter companion apps on Android and iOS), shipping new features end to end.",
    "Added <b>chat-based order tracking</b> to Nexoura: customers ask about an order in plain language, and the bot finds their customer codes, pulls out the order ID, calls the right country's order API and returns item status and invoice numbers.",
    "Delivered <b>A&amp;E Digital</b>, a Flutter product catalog and sales app with an admin panel. It has <b>100+ users</b> in its first phase and is built for global rollout: live in Bangladesh, with Europe next.",
    "Built <b>multi-country sales order entry</b>, now live, with per-country screens and API routing, draft and confirmed order states, and an approval workflow with a dedicated approver role and email notifications.",
    "Restructured the backend into feature modules and built JWT guest auth with refresh tokens, shared by the mobile and web clients.",
    "Built the approvals module in A&amp;E Digital: leave and LFA approvals are live, single-price and bulk-price approvals are in progress, and 10+ more approval types are planned.",
    "Maintain a legacy Java Android app (TLS fixes, AndroidX migration, Gradle/JDK upgrades). Mentor one direct report and run stakeholder demos.",
]

story = []
story += [Paragraph("MD JUNAED ABED", name),
          Paragraph("Flutter + .NET Engineer | Shipping AI features in production mobile apps", role),
          Spacer(1, 3),
          Paragraph("Dhaka, Bangladesh &nbsp;|&nbsp; junaed98m@gmail.com", contact),
          Paragraph('<link href="https://www.linkedin.com/in/mdjunaedabed/">in/mdjunaedabed</link> &nbsp;|&nbsp; '
                    '<link href="https://github.com/JunaedAbed">github.com/JunaedAbed</link> &nbsp;|&nbsp; '
                    '<link href="https://orcid.org/0009-0009-7237-7505">orcid.org/0009-0009-7237-7505</link> &nbsp;|&nbsp; '
                    '<link href="https://abed-page.vercel.app/">abed-page.vercel.app</link>', contact),
          Paragraph("Open to remote roles &nbsp;·&nbsp; Dhaka (UTC+6), overlaps EU and US mornings", contact)]

story += section("SUMMARY")
story.append(Paragraph(
    "Flutter and .NET engineer with 4+ years of experience building mobile apps and APIs, now shipping LLM features "
    "to real users: an AI chatbot with chat-based order tracking and a multi-country Flutter sales app at American &amp; Efird. "
    "Core stack: Flutter, Dart, C#, ASP.NET Core, MSSQL and LLM / RAG integration, with NestJS and MongoDB on the side. "
    "Co-author of two peer-reviewed systematic reviews on federated learning. Enjoys mentoring and turning new "
    "technology into features people use.", body))

story += section("PROFESSIONAL EXPERIENCE")
story += job("American &amp; Efird (Bangladesh) Ltd., Dhaka", "JUN 2026 – PRESENT", "Software Engineer, IT Innovation",
             "Flutter, ASP.NET Core, MSSQL, LLM integration", AE_BULLETS)
story += job("Neoscoder Ltd., Dhaka", "NOV 2024 – JUN 2026", "Senior Software Developer",
             "NestJS, TypeScript, MySQL, .NET Core, MSSQL", [
    "Developing and maintaining robust backend systems using NestJS, MySQL, .NET Core, MSSQL, and TypeORM, ensuring efficient and scalable solutions.",
    "Contributing to the Store Sales Project, including the implementation of inventory transfer functionality to streamline stock management across locations, improve accuracy, and enhance operational efficiency."])
story += job("Akij Venture Ltd., Dhaka", "MAY 2024 – NOV 2024", "Senior Software Developer",
             "Flutter, NestJS, MongoDB", [
    "Lead the mobile application development team to deliver high-quality software solutions.",
    "Collaborate with the backend team to integrate and optimize services and APIs.",
    "Coordinate with the SQA team to ensure rigorous testing and quality assurance.",
    "Implement backend services using NestJS and NoSQL databases.",
    "Engage in Agile methodologies and Scrum planning to enhance project management."])
story += job("Akij Takaful Life Insurance PLC., Dhaka", "OCT 2022 – MAY 2024", "Mobile Apps Developer",
             "Flutter, .NET, MSSQL", [
    "Developed cross-platform mobile apps using Flutter.",
    "Documented development processes and architectural designs.",
    "Implemented backend services and APIs with ASP.NET and MSSQL.",
    "Coordinated payment integration with banking institutions and payment gateways.",
    "Resolved technical issues promptly, ensuring efficient user support.",
    "Updated backend infrastructure regularly for maintenance and enhancements."])

story += section("PUBLICATIONS")
story.append(Paragraph(
    "S. M. Shawon, I. A. Adan, M. Moniruzzaman, O. H. Sinan, <b>M. J. Abed</b>, M. A. Qwaid, M. T. Sarker, H. B. A. Karim. "
    "<b>Federated Learning Approaches in Precision Agriculture: A Systematic Review of Current Trends, Challenges, and Opportunities.</b> "
    "<i>IEEE Access</i>, 2026. doi:<link href=\"https://doi.org/10.1109/ACCESS.2026.3667548\" color=\"#1b2a5e\">10.1109/ACCESS.2026.3667548</link><br/>"
    "<font color=\"#555555\">A review of how federated learning lets farms and agri-tech systems train shared AI models without pooling their private data.</font>", pub))
story.append(Paragraph(
    "S. M. Shawon, F. L. Niha, O. H. Sinan, <b>M. J. Abed</b>, M. A. Qwaid, M. T. Sarker, H. T. Zubair. "
    "<b>Integrating Federated Learning and Explainable AI for Plant Disease Detection: A Systematic Review of Recent Advances in Precision Agriculture.</b> "
    "<i>International Journal of Computational Intelligence Systems</i> (Springer), 2026. doi:<link href=\"https://doi.org/10.1007/s44196-026-01219-w\" color=\"#1b2a5e\">10.1007/s44196-026-01219-w</link><br/>"
    "<font color=\"#555555\">A review of combining federated learning with explainable AI so plant-disease detection models stay private and their predictions stay understandable.</font>", pub))
story.append(Paragraph('ORCID: <link href="https://orcid.org/0009-0009-7237-7505" color="#1b2a5e">orcid.org/0009-0009-7237-7505</link>', body))

story += section("SKILLS")
story.append(Paragraph("<b>Core:</b> Flutter, Dart, C#, ASP.NET Core, MSSQL, LLM / RAG integration", body))
story.append(Spacer(1, 3))
story.append(Paragraph("<b>Also used:</b> NestJS, TypeScript, Laravel, PHP, React, Next.js, MongoDB, MySQL, Firebase, Python", body))

story += section("EDUCATION")
story.append(Paragraph("<b>B.Sc. in Computer Science &amp; Engineering</b>", body))
story.append(Paragraph("BRAC University • JAN 2018 – MAY 2022", body))
story.append(Paragraph("Thesis: <i>Demand forecasting in supply chains using machine learning and neural networks</i>", body))

story += section("PROJECTS")


def project(ttl, stack, items):
    return [KeepTogether([Paragraph(f"<b>{ttl}</b>", body), Paragraph(f"<b>Tech Stack:</b> {stack}", body)]
                         + bullets(items) + [Spacer(1, 4)])]


story += project("Store Sales — SaaS Project", "NestJS, MySQL", [
    "Contributed to the Store Sales project by developing key modules including Inventory Transfer, Inventory Damage (Return, Receive), Requisition, Voucher, and Membership Point to enhance sales and inventory management workflows.",
    "Implemented transactions and stored procedures to improve stock accuracy across multiple locations.",
    "Implemented role-based Menu &amp; Menu Action Control.",
    "Developed and integrated membership point features to support customer loyalty and engagement.",
    "Supported system maintenance, bug fixes, and enhancements to ensure stability and reliability in production."])
story += project("HRIS — HR Management Project", "NestJS, MySQL", [
    "Developed backend modules including Movement, Menu Permission &amp; Action, TADA, and Letter Dispatch using NestJS and MySQL.",
    "Implemented role-based access control and automated core HR workflows to improve system efficiency.",
    "Optimized database queries for better performance and scalability across modules."])
story += project("My Akij Takaful — Life Insurance Mobile App", "Flutter", [
    "Developed a cross-platform life insurance app with Flutter, enhancing policyholder and agent experiences.",
    "Implemented key features such as policy onboarding, digital health cards, tax certificate generation, and claim processing.",
    "Integrated policy and proposal lists, premium and banca calculators, and agent chain setup for efficient operations.",
    "Developed agent management tools, including a top-ten ranking system, to track performance.",
    "Integrated SSLCommerz, Nagad, and bKash payment gateways for seamless premium transactions."])
story += project("Akij API — Backend for Akij Takaful Life Insurance App", "ASP.NET, MSSQL, REST API", [
    "Developed and maintained the backend infrastructure for the Akij Takaful life insurance mobile app.",
    "Designed and implemented RESTful APIs to handle policy onboarding, claims processing, tax certificates, and digital health cards.",
    "Worked extensively with stored procedures in MSSQL to optimize database queries and improve performance.",
    "Implemented authentication, authorization, and role-based access control to enhance security.",
    "Provided comprehensive API documentation to support frontend development and third-party integrations.",
    "Conducted regular maintenance, debugging, and performance tuning to ensure system reliability and efficiency."])
story += project("Fair Value — Akij Ecommerce Mobile App", "Flutter", [
    "Developed a cross-platform e-commerce mobile app using Flutter, ensuring a smooth and engaging user experience.",
    "Designed and implemented UI/UX for intuitive navigation, modern aesthetics, and improved user engagement.",
    "Integrated payment gateways for seamless and secure transactions.",
    "Optimized app performance for fast loading times, smooth animations, and responsiveness.",
    "Published the iOS version of the app on the Apple App Store, ensuring compliance with Apple's guidelines.",
    "Provided ongoing maintenance, bug fixes, and feature enhancements to improve app stability and user satisfaction."])
story += project("Warranty App — Akij Electrical Warranty Management Mobile App", "Flutter", [
    "Developed a cross-platform mobile app for warranty management using Flutter, tailored for retailers.",
    "Implemented warranty registration with a simple barcode scanning feature to easily start warranties for products.",
    "Designed a warranty validation and replacement process using barcode scanning for quick and accurate service.",
    "Streamlined the retailer experience by providing intuitive UI/UX for efficient warranty management.",
    "Provided ongoing maintenance to enhance functionality, resolve issues, and improve user satisfaction."])
story += project("Caravan 360 API — Video Editing App Backend", "NestJS, MongoDB", [
    "Developed the backend API for the Caravan 360 video editing app using NestJS and MongoDB.",
    "Implemented user authentication with registration, login, and token-based APIs to secure user data and sessions.",
    "Designed and developed APIs for video storage on the server, allowing users to upload videos and generate shareable links.",
    "Integrated secure API endpoints for managing user sessions, video uploads, and link generation.",
    "Provided API documentation to support frontend integration and third-party usage.",
    "Conducted regular updates, bug fixes, and performance optimizations to maintain a stable backend."])

story += section("REFERENCES")
story.append(Paragraph("References available on request.", body))

doc = SimpleDocTemplate(OUT, pagesize=letter, leftMargin=0.7 * inch, rightMargin=0.7 * inch,
                        topMargin=0.55 * inch, bottomMargin=0.55 * inch,
                        title="Md Junaed Abed - CV", author="Md Junaed Abed")
doc.build(story)
print("wrote", os.path.abspath(OUT))
