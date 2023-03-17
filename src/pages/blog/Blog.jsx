import React from 'react';
import bannerImg from '../../assets/images/blog-images/blog-header.jpg';
import ContactMe from '../home/contact-me/ContactMe';

const Blog = () => {
    return (
        <section>
            <div className='px-4 md:px-8'>
                <div className='py-8 md:py-12'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <div>
                            <h1 className='text-3xl md:text-6xl my-2 md:my-4 font-semibold'>Photography Services</h1>

                            <p className='text-xl'>
                                Our in-house photography services team made up of professional photographers can add value to your website with high-resolution team photos, corporate event photography and product photography.
                            </p>
                        </div>
                        <div className='my-8 md:my-0'>
                            <img src={bannerImg} alt="BlogImg" className='w-3/4 mx-auto' />
                        </div>
                    </div>
                </div>

                <div className='py-8 md:py-12'>
                    <div>
                        <div>
                            <h1 className='text-xl md:text-3xl my-2 md:my-4 font-semibold text-center'>Can I afford professional photography services?</h1>


                        </div>
                        <div className='my-8 md:my-0 w-4/5 md:w-3/5 mx-auto'>
                            <div className='flex justify-center items-center'>
                                <div className='text-xl'>
                                    <p className='my-12'>Yes</p>
                                    <p className='my-8'>
                                        While many professional photographers and companies charge per image and contract images per use on top of an hourly rate or shoot fee, our in-house photography team has a flat rate for full-day or half-day shoots — and you get to keep all photos with full usage rights, forever. Our professional photographers will edit all photos for highest quality, and our graphic design team are experts at putting these photos to the best use for your applications.
                                    </p>
                                    <p className='my-8'>
                                        And if you’re one of our digital marketing clients, your Vital digital marketing team will have immediate access to your library of photos, so we can put these high-quality images to work in your digital marketing strategy right away.
                                    </p>
                                    <div>
                                        <p className='my-8 font-semibold'>
                                            Our photography services include:
                                        </p>
                                        <ul className='my-8 list-disc mx-8'>
                                            <li className='my-2'>Full-day or half-day photo shoots with all necessary equipment</li>
                                            <li className='my-2'>Professional camera and lens kits</li>
                                            <li className='my-2'>Professional lighting setup</li>
                                            <li className='my-2'>Single-shooter and multi-shooter options</li>
                                            <li className='my-2'>Photo editing, color correction and retouching</li>
                                            <li className='my-2'>Complete photo library access with full usage rights</li>
                                            <li className='my-2'>Photo metadata to SEO best practices</li>
                                            <li className='my-2'>Photo library hosting</li>
                                        </ul>
                                    </div>
                                    <div className='my-8'>
                                        <p className='my-8 font-semibold'>
                                            We have experience shooting all types of professional photos for our clients, including:
                                        </p>
                                        <ul className='my-8 list-disc mx-8'>
                                            <li className='my-2'>Corporate team photography</li>
                                            <li className='my-2'>Product photography</li>
                                            <li className='my-2'>Commercial photography</li>
                                            <li className='my-2'>Event photography</li>
                                            <li className='my-2'>Location and architectural photography</li>
                                            <li className='my-2'>Lifestyle photography</li>
                                            <li className='my-2'>Food photography</li>
                                            <li className='my-2'>Social media photography</li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <ContactMe></ContactMe>
        </section>
    );
};

export default Blog;