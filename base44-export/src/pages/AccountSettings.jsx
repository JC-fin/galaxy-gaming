
import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Phone, Mail, Package, Upload, Check } from "lucide-react";

export default function AccountSettings() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subscription_type: "None",
    profile_picture: ""
  });

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      // DISABLED: Base44 auth call to prevent redirects
      // const currentUser = await base44.auth.me();
      // setUser(currentUser);
      // setFormData({
      //   full_name: currentUser.full_name || "",
      //   email: currentUser.email || "",
      //   phone: currentUser.phone || "",
      //   subscription_type: currentUser.subscription_type || "None",
      //   profile_picture: currentUser.profile_picture || ""
      // });
      // Using placeholder data for now
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        subscription_type: "None",
        profile_picture: ""
      });
    } catch (error) {
      console.error("Failed to load user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      // DISABLED: Base44 file upload to prevent redirects
      // const { file_url } = await base44.integrations.Core.UploadFile({ file });
      // setFormData({ ...formData, profile_picture: file_url });
      // For now, create a local object URL
      const file_url = URL.createObjectURL(file);
      setFormData({ ...formData, profile_picture: file_url });
      alert("Image uploaded locally (Base44 upload disabled)");
    } catch (error) {
      console.error("Failed to upload image:", error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSaved(false);

    try {
      // DISABLED: Base44 auth update to prevent redirects
      // await base44.auth.updateMe({
      //   full_name: formData.full_name,
      //   phone: formData.phone,
      //   subscription_type: formData.subscription_type,
      //   profile_picture: formData.profile_picture
      // });
      // For now, just show success message
      console.log("Would update user:", formData);
      
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error("Failed to save:", error);
      alert("Failed to save changes. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0D10] flex items-center justify-center">
        <div className="animate-pulse text-[#E6EAF0]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0D10] py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="display-heading text-4xl text-white mb-2">Account Settings</h1>
          <p className="text-[#E6EAF0]/60">Manage your profile and subscription preferences</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture Card */}
          <Card className="bg-[#12161C] border-[#A78BFA]/20">
            <CardHeader>
              <CardTitle className="text-white">Profile Picture</CardTitle>
              <CardDescription className="text-[#E6EAF0]/60">
                Update your profile photo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6">
                <div className="relative">
                  {formData.profile_picture ? (
                    <img
                      src={formData.profile_picture}
                      alt="Profile"
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-[#7C3AED]/30"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center ring-4 ring-[#7C3AED]/30">
                      <User className="w-12 h-12 text-white" />
                    </div>
                  )}
                  {uploading && (
                    <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center">
                      <div className="animate-spin h-8 w-8 border-4 border-white border-t-transparent rounded-full"></div>
                    </div>
                  )}
                </div>
                
                <div>
                  <input
                    type="file"
                    id="profile-upload"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    disabled={uploading}
                  />
                  <label htmlFor="profile-upload">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-[#A78BFA] text-[#A78BFA] hover:bg-[#7C3AED]/10"
                      disabled={uploading}
                      onClick={() => document.getElementById('profile-upload').click()}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      {uploading ? "Uploading..." : "Upload Photo"}
                    </Button>
                  </label>
                  <p className="text-sm text-[#E6EAF0]/40 mt-2">
                    JPG, PNG or GIF. Max 5MB.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information Card */}
          <Card className="bg-[#12161C] border-[#A78BFA]/20">
            <CardHeader>
              <CardTitle className="text-white">Personal Information</CardTitle>
              <CardDescription className="text-[#E6EAF0]/60">
                Update your personal details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="full_name" className="text-[#E6EAF0]">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A78BFA]/50" />
                    <Input
                      id="full_name"
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      className="pl-10 bg-[#0B0D10] border-[#A78BFA]/20 text-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#E6EAF0]">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A78BFA]/50" />
                    <Input
                      id="email"
                      value={formData.email}
                      disabled
                      className="pl-10 bg-[#0B0D10]/50 border-[#A78BFA]/20 text-[#E6EAF0]/50 cursor-not-allowed"
                    />
                  </div>
                  <p className="text-xs text-[#E6EAF0]/40">Email cannot be changed</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#E6EAF0]">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A78BFA]/50" />
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-10 bg-[#0B0D10] border-[#A78BFA]/20 text-white"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <p className="text-xs text-[#E6EAF0]/40">
                  Used for shipping notifications and order updates
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Subscription Card */}
          <Card className="bg-[#12161C] border-[#A78BFA]/20">
            <CardHeader>
              <CardTitle className="text-white">Subscription</CardTitle>
              <CardDescription className="text-[#E6EAF0]/60">
                Your current subscription plan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subscription_type" className="text-[#E6EAF0]">
                  Current Plan
                </Label>
                <div className="relative">
                  <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A78BFA]/50 z-10" />
                  <Select
                    value={formData.subscription_type}
                    onValueChange={(value) => setFormData({ ...formData, subscription_type: value })}
                  >
                    <SelectTrigger className="pl-10 bg-[#0B0D10] border-[#A78BFA]/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="None">No Subscription</SelectItem>
                      <SelectItem value="Explorer">Explorer - $35/month</SelectItem>
                      <SelectItem value="Adventurer">Adventurer - $59/month</SelectItem>
                      <SelectItem value="Legend">Legend - $99/month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {formData.subscription_type !== "None" && (
                <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-lg p-4">
                  <p className="text-sm text-[#E6EAF0]">
                    ✨ You're subscribed to <strong>{formData.subscription_type}</strong>
                  </p>
                  <p className="text-xs text-[#E6EAF0]/60 mt-1">
                    Next delivery: {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end gap-4">
            <Button
              type="submit"
              disabled={saving}
              className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white px-8 py-6 text-lg font-semibold hover:opacity-90"
            >
              {saving ? (
                <>
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  Saving...
                </>
              ) : saved ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Saved!
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>

        {/* Account Info */}
        <Card className="bg-[#12161C] border-[#A78BFA]/20 mt-6">
          <CardHeader>
            <CardTitle className="text-white text-sm">Account Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-[#E6EAF0]/40">Account ID</p>
                <p className="text-[#E6EAF0] font-mono">{user?.id}</p>
              </div>
              <div>
                <p className="text-[#E6EAF0]/40">Member Since</p>
                <p className="text-[#E6EAF0]">
                  {new Date(user?.created_date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
