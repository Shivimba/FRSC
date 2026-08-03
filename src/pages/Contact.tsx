import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PageHero } from "@/components/layout/PageHero";
import { PageMeta } from "@/components/seo/PageMeta";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("A valid email address is required"),
  organization: z.string().optional(),
  subject: z.string().min(5, "Please provide a brief subject"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Please include a message of at least 10 characters"),
});

// Contact form backend (Formspree, form "FSRC Contact" — delivers to the owner's inbox).
const FORM_ENDPOINT = "https://formspree.io/f/mjgnnnnj";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      subject: "",
      inquiryType: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...values,
          _subject: `[FSRC] ${values.inquiryType}: ${values.subject}`,
        }),
      });
      if (!res.ok) throw new Error(`Submission failed (${res.status})`);
      setIsSuccess(true);
      form.reset();
    } catch {
      setSubmitError(
        "Your message could not be sent. Please try again in a moment, or email us directly at inquiries@fsrc.pro."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="pb-24">
      <PageMeta
        title="Contact FSRC"
        description="Contact FSRC to commission research, request a policy briefing, inquire about advisory services, or learn about FSRC Public Utility Labs products. We respond to all institutional inquiries within 3–5 business days."
      />
      <PageHero
        title="Contact FSRC"
        description="To commission research, request a briefing, inquire about advisory services, or explore FSRC Public Utility Labs, please use the form below. We respond to all institutional inquiries within 3–5 business days."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Contact Info */}
          <aside className="lg:col-span-1" aria-label="Contact information">
            <h2 className="font-serif text-2xl font-bold text-primary mb-2">Direct Contact</h2>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-8">Get in Touch</p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary border border-border/40 flex items-center justify-center shrink-0" aria-hidden="true">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-primary mb-2">Email</h3>
                  <p className="text-sm text-foreground/70">
                    General:{" "}
                    <a href="mailto:info@fsrc.pro" className="hover:text-accent transition-colors focus-visible:underline">
                      info@fsrc.pro
                    </a>
                  </p>
                  <p className="text-sm text-foreground/70 mt-0.5">
                    Advisory:{" "}
                    <a href="mailto:advisory@fsrc.pro" className="hover:text-accent transition-colors focus-visible:underline">
                      advisory@fsrc.pro
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary border border-border/40 flex items-center justify-center shrink-0" aria-hidden="true">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-primary mb-2">Headquarters</h3>
                  <address className="not-italic text-sm text-foreground/70">
                    Ottawa, Ontario<br />Canada
                  </address>
                </div>
              </div>
            </div>

            <div className="mt-14 p-8 bg-primary text-white">
              <h3 className="font-serif text-xl font-bold mb-3">Media Inquiries</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                FSRC researchers are available for expert commentary on global governance, human rights, digital policy, and applied public-purpose technology.
              </p>
              <Button variant="white-outline" size="sm" className="w-full">
                Press Kit & Assets
              </Button>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 border border-border shadow-sm">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20" role="status" aria-live="polite">
                <CheckCircle2 className="w-16 h-16 text-accent mb-6" aria-hidden="true" />
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">Inquiry Received</h2>
                <p className="text-foreground/70 max-w-md leading-relaxed">
                  Thank you. We have received your message and will respond within 3–5 business days.
                </p>
                <Button
                  className="mt-8"
                  onClick={() => setIsSuccess(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-1">Send an Inquiry</h2>
                  <p className="text-sm text-muted-foreground">Fields marked * are required.</p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-semibold">Full Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Jane Doe"
                                autoComplete="name"
                                aria-required="true"
                                className="bg-secondary/50 rounded-sm h-12"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-semibold">Email Address *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="jane@institution.org"
                                type="email"
                                autoComplete="email"
                                aria-required="true"
                                className="bg-secondary/50 rounded-sm h-12"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-semibold">Organization</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Institution or organization"
                                autoComplete="organization"
                                className="bg-secondary/50 rounded-sm h-12"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="inquiryType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-semibold">Inquiry Type *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger
                                  className="bg-secondary/50 rounded-sm h-12"
                                  aria-required="true"
                                >
                                  <SelectValue placeholder="Select purpose…" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                                <SelectItem value="Commissioned Research Inquiry">Commissioned Research</SelectItem>
                                <SelectItem value="Advisory Services Inquiry">Advisory Services</SelectItem>
                                <SelectItem value="Public Utility Labs Inquiry">Public Utility Labs / Products</SelectItem>
                                <SelectItem value="Media Inquiry">Media Inquiry</SelectItem>
                                <SelectItem value="Partnership Inquiry">Partnership Inquiry</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-semibold">Subject *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Brief subject line"
                              aria-required="true"
                              className="bg-secondary/50 rounded-sm h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-semibold">Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your inquiry or research need in brief."
                              aria-required="true"
                              className="resize-none bg-secondary/50 rounded-sm min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {submitError && (
                      <p role="alert" className="text-sm text-destructive bg-destructive/5 border border-destructive/20 px-4 py-3">
                        {submitError}
                      </p>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full mt-4"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                          Submitting…
                        </>
                      ) : (
                        "Submit Inquiry"
                      )}
                    </Button>
                  </form>
                </Form>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
