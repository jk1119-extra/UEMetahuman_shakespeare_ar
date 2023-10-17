// ! M_Teeth_air/Default/FLocalVertexFactory/TMobileBasePassPSFMobileMovableDirectionalLightWithLightmapPolicyHDRLinear64SkylightEnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;4:in_var_TEXCOORD4,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_PreExposure(546,1),View_NormalCurvatureToRoughnessScaleBias(732,3),View_SkyLightColor(748,4),View_MobileSkyIrradianceEnvironmentMap(752,32),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3),View_bSubsurfacePostprocessEnabled(987,1),View_SSProfilesTextureSizeAndInvSize(988,4)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: PrecomputedLightingBuffer(4): PrecomputedLightingBuffer_LightMapScale(16,8),PrecomputedLightingBuffer_LightMapAdd(24,8)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_2(8,4),Material_PreshaderBuffer_3(12,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_7(28,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:546-0:h:16:1,0:732-0:h:20:3,0:748-0:h:24:4,0:752-0:h:28:32,0:786-0:m:8:1,0:792-0:h:60:3,0:987-0:h:64:1,0:988-0:h:68:4,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:16-4:m:0:8,4:24-4:m:8:8,5:0-5:m:0:4,5:4-5:m:4:4,5:12-5:m:8:4,5:84-5:u:0:1,6:4-6:h:0:4,6:8-6:h:4:4,6:12-6:h:8:4,6:16-6:h:12:4,6:20-6:h:16:4,6:24-6:h:20:4,6:28-6:h:24:4
// @Samplers: MobileBasePass_Forward_ForwardLocalLightBuffer(0:1),MobileBasePass_Forward_NumCulledLightsGrid(1:1),MobileBasePass_Forward_CulledLightDataGrid(2:1),View_SSProfilesTexture(3:1[View_SSProfilesSampler]),View_SSProfilesPreIntegratedTexture(4:1[View_SSProfilesPreIntegratedSampler]),MobileReflectionCapture_Texture(5:1[MobileReflectionCapture_TextureSampler]),LightmapResourceCluster_LightMapTexture(6:1[LightmapResourceCluster_LightMapSampler]),Material_Texture2D_0(7:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(8:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(9:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(10:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(11:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(12:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(13:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(14:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(15:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(16:1[Material_Texture2D_9Sampler]),Material_Texture2D_10(17:1[Material_Texture2D_10Sampler])
#version 320 es
#if defined(GL_EXT_control_flow_attributes)
#define out_var_SV_Target1 out_Target1
#define out_var_SV_Target0 out_Target0
#define in_var_TEXCOORD8 in_TEXCOORD8
#define in_var_TEXCOORD4 in_TEXCOORD4
#define in_var_TEXCOORD0 in_TEXCOORD0
#define in_var_TEXCOORD11 in_TEXCOORD11
#define in_var_TEXCOORD10 in_TEXCOORD10
#extension GL_EXT_control_flow_attributes : require
#define SPIRV_CROSS_FLATTEN [[flatten]]
#define SPIRV_CROSS_BRANCH [[dont_flatten]]
#define SPIRV_CROSS_UNROLL [[unroll]]
#define SPIRV_CROSS_LOOP [[dont_unroll]]
#else
#define SPIRV_CROSS_FLATTEN
#define SPIRV_CROSS_BRANCH
#define SPIRV_CROSS_UNROLL
#define SPIRV_CROSS_LOOP
#endif
precision mediump float;
precision highp int;

#define View_SSProfilesTextureSizeAndInvSize (pc0_h[17])
#define View_bSubsurfacePostprocessEnabled (pc0_h[16].x)
#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[15].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
#define View_MobileSkyIrradianceEnvironmentMap(Offset) (pc0_h[7 + int(Offset)])
#define View_SkyLightColor (pc0_h[6])
#define View_NormalCurvatureToRoughnessScaleBias (pc0_h[5].xyz)
#define View_PreExposure (pc0_h[4].x)
#define View_ViewRectMin (pc0_m[1])
#define View_ViewForward (pc0_m[0].xyz)
#define View_ViewToClip (mat4(pc0_h[0 + 0].xyzw,pc0_h[0 + 1].xyzw,pc0_h[0 + 2].xyzw,pc0_h[0 + 3].xyzw))
#define SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler ps3
#define SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler ps4
#define SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler ps5
#define SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler ps6
#define SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler ps7
#define SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler ps8
#define SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler ps9
#define SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler ps10
#define SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler ps11
#define SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler ps12
#define SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler ps13
#define SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler ps14
#define SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler ps15
#define SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler ps16
#define SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler ps17
uniform mediump vec4 pc0_m[3];
uniform highp vec4 pc0_h[18];


#define MobileReflectionCapture_Params (pc1_h[0])
uniform highp vec4 pc1_h[1];


#define Primitive_Flags (pc2_u[0].x)
uniform uvec4 pc2_u[1];


#define MobileBasePass_Forward_LightGridZParams (pc3_h[0].xyz)
#define MobileBasePass_Forward_LightGridPixelSizeShift (pc3_u[1].x)
#define MobileBasePass_Forward_CulledGridSize (pc3_i[0].xyz)
#define MobileBasePass_Forward_NumLocalLights (pc3_u[0].x)
uniform highp vec4 pc3_h[1];
uniform ivec4 pc3_i[1];
uniform uvec4 pc3_u[2];


#define PrecomputedLightingBuffer_LightMapAdd(Offset) (pc4_m[2 + int(Offset)])
#define PrecomputedLightingBuffer_LightMapScale(Offset) (pc4_m[0 + int(Offset)])
uniform mediump vec4 pc4_m[4];


#define MobileDirectionalLight_DirectionalLightShadowMapChannelMask (pc5_u[0].x)
#define MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale (pc5_m[2])
#define MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition (pc5_m[1])
#define MobileDirectionalLight_DirectionalLightColor (pc5_m[0])
uniform uvec4 pc5_u[1];
uniform mediump vec4 pc5_m[3];


#define Material_PreshaderBuffer_7 (pc6_h[6])
#define Material_PreshaderBuffer_6 (pc6_h[5])
#define Material_PreshaderBuffer_5 (pc6_h[4])
#define Material_PreshaderBuffer_4 (pc6_h[3])
#define Material_PreshaderBuffer_3 (pc6_h[2])
#define Material_PreshaderBuffer_2 (pc6_h[1])
#define Material_PreshaderBuffer_1 (pc6_h[0])
uniform highp vec4 pc6_h[7];


layout(binding = 0) uniform highp samplerBuffer ps0;
layout(binding = 1) uniform highp usamplerBuffer ps1;
layout(binding = 2) uniform highp usamplerBuffer ps2;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler;
uniform highp sampler2D SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler;
uniform highp sampler2DArray SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler;
uniform highp samplerCube SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler;

layout(location = 0) in vec4 in_var_TEXCOORD10;
layout(location = 1) in vec4 in_var_TEXCOORD11;
layout(location = 2) in highp vec4 in_var_TEXCOORD0[1];
layout(location = 3) in highp vec4 in_var_TEXCOORD4;
layout(location = 4) in highp vec4 in_var_TEXCOORD8;
layout(location = 0) out vec4 out_var_SV_Target0;
layout(location = 1) out highp float out_var_SV_Target1;

vec3 _517;
vec4 _518;
vec3 _519;

void main()
{
    highp vec3 _551;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _551 = -View_ViewForward;
    }
    else
    {
        _551 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _183 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _562 = vec4(_183, sqrt(clamp(1.0 - dot(_183, _183), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_1.xyz;
    float _91 = _562.z + 1.0;
    vec2 _190 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec4 _573 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp float _576 = _573.x * Material_PreshaderBuffer_1.w;
    vec3 _95 = vec4(_190, sqrt(clamp(1.0 - dot(_190, _190), 0.0, 1.0)), 1.0).xyz * vec3(_576, _576, 1.0);
    vec3 _100 = vec3(_562.xy, _91);
    vec3 _104 = vec3(_95.xy * vec2(-1.0), _95.z);
    vec3 _110 = (_100 * vec3(dot(_100, _104))) - (vec3(_91) * _104);
    float _112 = _110.z + 1.0;
    vec2 _197 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_2.x)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _589 = mix(vec3(0.0, 0.0, 1.0), vec4(_197, sqrt(clamp(1.0 - dot(_197, _197), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_2.y));
    vec3 _120 = vec3(_110.xy, _112);
    vec3 _124 = vec3(_589.xy * vec2(-1.0), _589.z);
    vec3 _130 = (_120 * vec3(dot(_120, _124))) - (vec3(_112) * _124);
    float _132 = _130.z + 1.0;
    highp vec4 _593 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec2 _204 = (_593.xy * vec2(2.0)) - vec2(1.0);
    highp float _596 = sqrt(clamp(1.0 - dot(_204, _204), 0.0, 1.0));
    vec3 _137 = vec3(_130.xy, _132);
    vec3 _140 = vec3(vec4(_204, _596, 1.0).xy * vec2(-1.0), _596);
    vec3 _147 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_137 * vec3(dot(_137, _140))) - (vec3(_132) * _140))) * 1.0;
    highp vec3 _601 = (-_551) + ((_147 * dot(_147, _551)) * 2.0);
    highp vec4 _605 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp vec4 _612 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, Material_PreshaderBuffer_3.xy);
    highp vec4 _616 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _148 = _605.xyz;
    highp vec4 _623 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_4.xy);
    highp vec4 _629 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _159 = _629.x;
    vec3 _161 = mix(mix(_148, _612.xyz * (_148 / _616.xyz), vec3(0.669921875)), (_623.xyz * (_148 * vec3(1.0380132198333740234375, 1.27521789073944091796875, 1.815602779388427734375))) * vec3(Material_PreshaderBuffer_4.z), vec3(_159));
    highp vec4 _636 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, Material_PreshaderBuffer_5.yz);
    float _213 = _636.x;
    float _214 = _636.y;
    float _211 = _636.z;
    vec3 _170 = _573.xyz;
    vec3 _172 = normalize(in_var_TEXCOORD11.xyz);
    vec3 _219 = clamp(mix(_161, _161 * vec3((_213 <= 0.0) ? 0.0 : pow(_213, 0.300048828125), (_214 <= 0.0) ? 0.0 : pow(_214, 0.300048828125), (_211 <= 0.0) ? 0.0 : pow(_211, 0.300048828125)), vec3(_159 * clamp(1.0 - ((1.0 - _629.y) * Material_PreshaderBuffer_6.y), 0.0, 1.0))) * _170, vec3(0.0), vec3(1.0));
    float _220 = clamp((_170 * vec3(smoothstep(0.0, Material_PreshaderBuffer_6.z, dot(((vec3(dot(_551, _172)) * _172) * vec3(2.0)) - _551, _551)) * 0.449951171875)).x, 0.0, 1.0);
    highp float _658 = max(0.015625, clamp(mix(Material_PreshaderBuffer_7.x, Material_PreshaderBuffer_6.w, _159), 0.0, 1.0));
    vec3 _223 = dFdx(_147);
    vec3 _224 = dFdy(_147);
    highp float _664 = clamp(pow(max(dot(_223, _223), dot(_224, _224)), View_NormalCurvatureToRoughnessScaleBias.z), 0.001000000047497451305389404296875, 1.0);
    vec3 _228 = vec3(0.07999999821186065673828125 * _220);
    highp vec2 _668 = in_var_TEXCOORD4.xy * vec2(1.0, 0.5);
    vec3 _236 = (texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _668).xyz * PrecomputedLightingBuffer_LightMapScale(0).xyz) + PrecomputedLightingBuffer_LightMapAdd(0).xyz;
    float _249 = dot(_236, vec3(0.300048828125, 0.58984375, 0.1099853515625));
    float _248 = (exp2((_249 * 16.0) - 8.0) - 0.00390625) * max(0.0, dot((texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _668 + vec2(0.0, 0.5)) * PrecomputedLightingBuffer_LightMapScale(1)) + PrecomputedLightingBuffer_LightMapAdd(1), vec4(_147.yzx, 1.0)));
    highp vec4 _689 = vec4(_147, 1.0);
    highp vec3 _693 = _517;
    _693.x = dot(View_MobileSkyIrradianceEnvironmentMap(0), _689);
    highp vec3 _697 = _693;
    _697.y = dot(View_MobileSkyIrradianceEnvironmentMap(1), _689);
    highp vec3 _701 = _697;
    _701.z = dot(View_MobileSkyIrradianceEnvironmentMap(2), _689);
    vec3 _250 = max(vec3(0.0), _701) * View_SkyLightColor.xyz;
    highp vec4 _720 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    float _260 = mix(1.0, dot(vec4(1.0), _720), dot(_720, vec4(1.0)));
    highp float _724 = max(0.0, dot(_147, normalize(_551 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    uint _727 = uint(((vec4(_519.x, _519.y, _519.z, vec4(1.0, 1.0, 1.0, Material_PreshaderBuffer_7.y).w) * View_bSubsurfacePostprocessEnabled).w * 255.0) + 0.5);
    highp vec2 _736 = (vec2(uvec2(5u, _727)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec4 _738 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _736, 0.0);
    float _274 = _738.z;
    highp float _741 = max(clamp(_658 * (_738.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
    float _278 = clamp(_658 * (_738.y * 2.0), 0.0, 1.0);
    float _264 = mix(_741, _278, _274);
    float _265 = dot(_147, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
    highp float _748 = float(_727);
    highp vec2 _757 = (vec2(uvec2(0u, _727)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec3 _760 = vec3(1.0) * max(0.0, dot(_147, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    vec3 _281 = _219 * 0.318407952785491943359375;
    highp float _765 = 1.0 - (_724 * _724);
    float _282 = _741 * _741;
    highp float _766 = _724 * _282;
    highp float _768 = _282 / (_765 + (_766 * _766));
    float _286 = _278 * _278;
    highp float _769 = _724 * _286;
    highp float _771 = _286 / (_765 + (_769 * _769));
    vec4 _300 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _264) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _301 = _300.x;
    float _304 = exp2((-9.28125) * clamp(abs(dot(_147, _551)) + 1.0013580322265625e-05, 0.0, 1.0));
    vec2 _311 = (vec2(-1.0400390625, 1.0400390625) * ((min(_301 * _301, _304) * _301) + _300.y)) + _300.zw;
    float _295 = clamp(_220 * 4.0, 0.0, 1.0);
    highp vec2 _784 = gl_FragCoord.xy - View_ViewRectMin.xy;
    uvec2 _811 = uvec2(uint(_784.x), uint(_784.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _391;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _391 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _601, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_658, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _391 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _601, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_658, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    vec4 _335 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _658) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _336 = _335.x;
    vec2 _344 = (vec2(-1.0400390625, 1.0400390625) * ((min(_336 * _336, _304) * _336) + _335.y)) + _335.zw;
    highp vec3 _859 = ((((_236 * (_248 / max(9.9999997473787516355514526367188e-06, _249))) + _250) * _219) + ((((mix(_760 * _260, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_265 - (max(2.0 * _265, 0.4000000059604644775390625) * (1.0 - sqrt(_260))), -1.0) * 0.5) + 0.5, _664, _748), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _757, 0.0).xyz) * _281) * 1.0) + ((_760 * (((_228 * _311.x) + vec3(_295 * _311.y)) * (mix(min(_768 * _768, 2048.0), min(_771 * _771, 2048.0), _274) * ((_264 * 0.25) + 0.25)))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * _260))) + (((_391 * mix(1.0, min((_248 + dot(_250, vec3(0.300048828125, 0.58984375, 0.1099853515625))) / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_658 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * 1.0) * ((_228 * _344.x) + vec3(_295 * _344.y)));
    uint _860 = ((((min(uint(max(0.0, log2(((1.0 / gl_FragCoord.w) * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _811.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _811.x) * 2u;
    uvec4 _868 = texelFetch(ps1, int(_860 + 1u));
    uint _869 = _868.x;
    uint _884 = (uint((Primitive_Flags & 1024u) != 0u) | (uint((Primitive_Flags & 2048u) != 0u) << 1u)) | (uint((Primitive_Flags & 4096u) != 0u) << 2u);
    uint _885 = min(min(texelFetch(ps1, int(_860)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _887;
    _887 = _859;
    highp vec3 _888;
    SPIRV_CROSS_LOOP
    for (uint _890 = 0u; _890 < _885; _887 = _888, _890++)
    {
        uint _899 = texelFetch(ps2, int(_869 + _890)).x * 6u;
        highp vec4 _901 = texelFetch(ps0, int(_899));
        highp vec4 _903 = texelFetch(ps0, int(_899 + 1u));
        highp vec4 _905 = texelFetch(ps0, int(_899 + 2u));
        highp vec4 _907 = texelFetch(ps0, int(_899 + 3u));
        highp float _908 = _901.w;
        highp float _909 = _908 * _908;
        highp vec3 _910 = _901.xyz;
        highp vec3 _911 = in_var_TEXCOORD8.xyz - _910;
        if ((dot(_911, _911) * _909) > 1.0)
        {
            _888 = _887;
            continue;
        }
        uint _918 = floatBitsToUint(_905.w);
        if (((_918 >> 8u) & _884) == 0u)
        {
            _888 = _887;
            continue;
        }
        highp float _927 = _903.w;
        highp vec4 _942 = vec4(float((_918 & 1u) != 0u), float((_918 & 2u) != 0u), float((_918 & 4u) != 0u), float((_918 & 8u) != 0u));
        highp vec3 _943 = _910 - in_var_TEXCOORD8.xyz;
        highp float _944 = dot(_943, _943);
        highp vec3 _946 = _943 * inversesqrt(_944);
        highp float _963;
        if (_927 == 0.0)
        {
            highp float _955 = _944 * _909;
            highp float _958 = clamp(1.0 - (_955 * _955), 0.0, 1.0);
            _963 = (_958 * _958) * (1.0 / (_944 + 1.0));
        }
        else
        {
            highp vec3 _950 = _943 * _908;
            _963 = pow(1.0 - clamp(dot(_950, _950), 0.0, 1.0), _927);
        }
        highp float _974;
        if (((_918 >> 16u) & 3u) == 2u)
        {
            highp float _971 = clamp((dot(_946, _905.xyz) - _907.x) * _907.y, 0.0, 1.0);
            _974 = _963 * (_971 * _971);
        }
        else
        {
            _974 = _963;
        }
        highp vec3 _1021;
        SPIRV_CROSS_BRANCH
        if (_974 > 0.0)
        {
            float _348 = mix(1.0, dot(vec4(1.0), _942), dot(_942, vec4(1.0)));
            highp float _982 = max(0.0, dot(_147, normalize(_551 + _946)));
            highp vec4 _984 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _736, 0.0);
            float _358 = _984.z;
            highp float _987 = max(clamp(_658 * (_984.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
            float _362 = clamp(_658 * (_984.y * 2.0), 0.0, 1.0);
            float _349 = mix(_987, _362, _358);
            float _350 = dot(_147, _946);
            highp vec3 _999 = vec3(1.0) * max(0.0, dot(_147, _946));
            highp float _1004 = 1.0 - (_982 * _982);
            float _365 = _987 * _987;
            highp float _1005 = _982 * _365;
            highp float _1007 = _365 / (_1004 + (_1005 * _1005));
            float _369 = _362 * _362;
            highp float _1008 = _982 * _369;
            highp float _1010 = _369 / (_1004 + (_1008 * _1008));
            vec4 _381 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _349) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _382 = _381.x;
            vec2 _390 = (vec2(-1.0400390625, 1.0400390625) * ((min(_382 * _382, _304) * _382) + _381.y)) + _381.zw;
            _1021 = (((mix(_999 * _348, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_350 - (max(2.0 * _350, 0.4000000059604644775390625) * (1.0 - sqrt(_348))), -1.0) * 0.5) + 0.5, _664, _748), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _757, 0.0).xyz) * _281) * 1.0) + ((_999 * (((_228 * _390.x) + vec3(_295 * _390.y)) * (mix(min(_1007 * _1007, 2048.0), min(_1010 * _1010, 2048.0), _358) * ((_349 * 0.25) + 0.25)))) * 1.0)) * ((_903.xyz * _974) * _348);
        }
        else
        {
            _1021 = vec3(0.0);
        }
        _888 = _887 + _1021;
    }
    vec3 _75 = _887 * 1.0;
    vec4 _392 = vec4(_75.x, _75.y, _75.z, _518.w);
    _392.w = 0.0;
    highp vec3 _1025 = min((_392.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_1025.x, _1025.y, _1025.z, _392.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

