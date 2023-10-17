// ! M_Teeth_air/Default/FLocalVertexFactory/TMobileBasePassPSFMobileDirectionalLightCSMAndSHIndirectPolicyHDRLinear64SkylightEnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_ViewSizeAndInvSize(516,4),View_PreExposure(546,1),View_NormalCurvatureToRoughnessScaleBias(732,3),View_SkyLightColor(748,4),View_MobileSkyIrradianceEnvironmentMap(752,32),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3),View_IndirectLightingCacheShowFlag(943,1),View_bSubsurfacePostprocessEnabled(987,1),View_SSProfilesTextureSizeAndInvSize(988,4)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: IndirectLightingCache(4): IndirectLightingCache_DirectionalLightShadowing(20,1),IndirectLightingCache_IndirectLightingSHCoefficients0(24,12),IndirectLightingCache_IndirectLightingSHCoefficients1(36,12),IndirectLightingCache_IndirectLightingSHCoefficients2(48,4)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightShadowSize(8,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowDistances(16,4),MobileDirectionalLight_DirectionalLightScreenToShadow(20,64),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_2(8,4),Material_PreshaderBuffer_3(12,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_7(28,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:516-0:h:16:4,0:546-0:h:20:1,0:732-0:h:24:3,0:748-0:h:28:4,0:752-0:h:32:32,0:786-0:m:8:1,0:792-0:h:64:3,0:943-0:h:68:1,0:987-0:h:72:1,0:988-0:h:76:4,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:20-4:m:0:1,4:24-4:h:0:12,4:36-4:h:12:12,4:48-4:h:24:4,5:0-5:m:0:4,5:4-5:m:4:4,5:8-5:m:8:4,5:12-5:m:12:4,5:16-5:m:16:4,5:20-5:h:0:64,5:84-5:u:0:1,6:4-6:h:0:4,6:8-6:h:4:4,6:12-6:h:8:4,6:16-6:h:12:4,6:20-6:h:16:4,6:24-6:h:20:4,6:28-6:h:24:4
// @Samplers: MobileBasePass_Forward_ForwardLocalLightBuffer(0:1),MobileBasePass_Forward_NumCulledLightsGrid(1:1),MobileBasePass_Forward_CulledLightDataGrid(2:1),View_SSProfilesTexture(3:1[View_SSProfilesSampler]),View_SSProfilesPreIntegratedTexture(4:1[View_SSProfilesPreIntegratedSampler]),MobileReflectionCapture_Texture(5:1[MobileReflectionCapture_TextureSampler]),MobileDirectionalLight_DirectionalLightShadowTexture(6:1[MobileDirectionalLight_DirectionalLightShadowSampler]),Material_Texture2D_0(7:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(8:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(9:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(10:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(11:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(12:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(13:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(14:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(15:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(16:1[Material_Texture2D_9Sampler]),Material_Texture2D_10(17:1[Material_Texture2D_10Sampler])
#version 320 es
#if defined(GL_EXT_control_flow_attributes)
#define out_var_SV_Target1 out_Target1
#define out_var_SV_Target0 out_Target0
#define in_var_TEXCOORD8 in_TEXCOORD8
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

#define View_SSProfilesTextureSizeAndInvSize (pc0_h[19])
#define View_bSubsurfacePostprocessEnabled (pc0_h[18].x)
#define View_IndirectLightingCacheShowFlag (pc0_h[17].x)
#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[16].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
#define View_MobileSkyIrradianceEnvironmentMap(Offset) (pc0_h[8 + int(Offset)])
#define View_SkyLightColor (pc0_h[7])
#define View_NormalCurvatureToRoughnessScaleBias (pc0_h[6].xyz)
#define View_PreExposure (pc0_h[5].x)
#define View_ViewSizeAndInvSize (pc0_h[4])
#define View_ViewRectMin (pc0_m[1])
#define View_ViewForward (pc0_m[0].xyz)
#define View_ViewToClip (mat4(pc0_h[0 + 0].xyzw,pc0_h[0 + 1].xyzw,pc0_h[0 + 2].xyzw,pc0_h[0 + 3].xyzw))
#define SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler ps3
#define SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler ps4
#define SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler ps5
#define SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler ps6
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
uniform highp vec4 pc0_h[20];


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


#define IndirectLightingCache_IndirectLightingSHCoefficients2 (pc4_h[6])
#define IndirectLightingCache_IndirectLightingSHCoefficients1(Offset) (pc4_h[3 + int(Offset)])
#define IndirectLightingCache_IndirectLightingSHCoefficients0(Offset) (pc4_h[0 + int(Offset)])
#define IndirectLightingCache_DirectionalLightShadowing (pc4_m[0].x)
uniform highp vec4 pc4_h[7];
uniform mediump vec4 pc4_m[1];


#define MobileDirectionalLight_DirectionalLightShadowMapChannelMask (pc5_u[0].x)
#define MobileDirectionalLight_DirectionalLightScreenToShadow(Offset) (mat4(pc5_h[0 + (int(Offset) * 4) + 0].xyzw,pc5_h[0 + (int(Offset) * 4) + 1].xyzw,pc5_h[0 + (int(Offset) * 4) + 2].xyzw,pc5_h[0 + (int(Offset) * 4) + 3].xyzw))
#define MobileDirectionalLight_DirectionalLightShadowDistances (pc5_m[4])
#define MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale (pc5_m[3])
#define MobileDirectionalLight_DirectionalLightShadowSize (pc5_m[2])
#define MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition (pc5_m[1])
#define MobileDirectionalLight_DirectionalLightColor (pc5_m[0])
uniform uvec4 pc5_u[1];
uniform highp vec4 pc5_h[16];
uniform mediump vec4 pc5_m[5];


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
uniform highp sampler2D SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler;
uniform highp sampler2D SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler;
uniform highp sampler2DArray SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler;
uniform highp samplerCube SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler;

layout(location = 0) in vec4 in_var_TEXCOORD10;
layout(location = 1) in vec4 in_var_TEXCOORD11;
layout(location = 2) in highp vec4 in_var_TEXCOORD0[1];
layout(location = 3) in highp vec4 in_var_TEXCOORD8;
layout(location = 0) out vec4 out_var_SV_Target0;
layout(location = 1) out highp float out_var_SV_Target1;

vec4 _562;
vec3 _563;
vec3 _565;
vec4 _566;

void main()
{
    highp float _576 = 1.0 / gl_FragCoord.w;
    highp vec2 _596 = gl_FragCoord.xy - View_ViewRectMin.xy;
    highp vec4 _605 = vec4(((_596 * View_ViewSizeAndInvSize.zw) - vec2(0.5)) * vec2(2.0, -2.0), gl_FragCoord.z, 1.0) * _576;
    highp vec3 _614;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _614 = -View_ViewForward;
    }
    else
    {
        _614 = normalize(-in_var_TEXCOORD8.xyz);
    }
    uint _780;
    vec2 _183 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _625 = vec4(_183, sqrt(clamp(1.0 - dot(_183, _183), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_1.xyz;
    float _91 = _625.z + 1.0;
    vec2 _190 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec4 _636 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp float _639 = _636.x * Material_PreshaderBuffer_1.w;
    vec3 _95 = vec4(_190, sqrt(clamp(1.0 - dot(_190, _190), 0.0, 1.0)), 1.0).xyz * vec3(_639, _639, 1.0);
    vec3 _100 = vec3(_625.xy, _91);
    vec3 _104 = vec3(_95.xy * vec2(-1.0), _95.z);
    vec3 _110 = (_100 * vec3(dot(_100, _104))) - (vec3(_91) * _104);
    float _112 = _110.z + 1.0;
    vec2 _197 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_2.x)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _652 = mix(vec3(0.0, 0.0, 1.0), vec4(_197, sqrt(clamp(1.0 - dot(_197, _197), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_2.y));
    vec3 _120 = vec3(_110.xy, _112);
    vec3 _124 = vec3(_652.xy * vec2(-1.0), _652.z);
    vec3 _130 = (_120 * vec3(dot(_120, _124))) - (vec3(_112) * _124);
    float _132 = _130.z + 1.0;
    highp vec4 _656 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec2 _204 = (_656.xy * vec2(2.0)) - vec2(1.0);
    highp float _659 = sqrt(clamp(1.0 - dot(_204, _204), 0.0, 1.0));
    vec3 _137 = vec3(_130.xy, _132);
    vec3 _140 = vec3(vec4(_204, _659, 1.0).xy * vec2(-1.0), _659);
    vec3 _147 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_137 * vec3(dot(_137, _140))) - (vec3(_132) * _140))) * 1.0;
    highp vec3 _664 = (-_614) + ((_147 * dot(_147, _614)) * 2.0);
    highp vec4 _668 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp vec4 _675 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, Material_PreshaderBuffer_3.xy);
    highp vec4 _679 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _148 = _668.xyz;
    highp vec4 _686 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_4.xy);
    highp vec4 _692 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _159 = _692.x;
    vec3 _161 = mix(mix(_148, _675.xyz * (_148 / _679.xyz), vec3(0.669921875)), (_686.xyz * (_148 * vec3(1.0380132198333740234375, 1.27521789073944091796875, 1.815602779388427734375))) * vec3(Material_PreshaderBuffer_4.z), vec3(_159));
    highp vec4 _699 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, Material_PreshaderBuffer_5.yz);
    float _213 = _699.x;
    float _214 = _699.y;
    float _211 = _699.z;
    vec3 _170 = _636.xyz;
    vec3 _172 = normalize(in_var_TEXCOORD11.xyz);
    vec3 _219 = clamp(mix(_161, _161 * vec3((_213 <= 0.0) ? 0.0 : pow(_213, 0.300048828125), (_214 <= 0.0) ? 0.0 : pow(_214, 0.300048828125), (_211 <= 0.0) ? 0.0 : pow(_211, 0.300048828125)), vec3(_159 * clamp(1.0 - ((1.0 - _692.y) * Material_PreshaderBuffer_6.y), 0.0, 1.0))) * _170, vec3(0.0), vec3(1.0));
    float _220 = clamp((_170 * vec3(smoothstep(0.0, Material_PreshaderBuffer_6.z, dot(((vec3(dot(_614, _172)) * _172) * vec3(2.0)) - _614, _614)) * 0.449951171875)).x, 0.0, 1.0);
    highp float _721 = max(0.015625, clamp(mix(Material_PreshaderBuffer_7.x, Material_PreshaderBuffer_6.w, _159), 0.0, 1.0));
    vec3 _223 = dFdx(_147);
    vec3 _224 = dFdy(_147);
    highp float _727 = clamp(pow(max(dot(_223, _223), dot(_224, _224)), View_NormalCurvatureToRoughnessScaleBias.z), 0.001000000047497451305389404296875, 1.0);
    vec3 _228 = vec3(0.07999999821186065673828125 * _220);
    float _236 = _147.y;
    vec4 _412 = _566;
    _412.y = (-0.48860299587249755859375) * _236;
    float _237 = _147.z;
    vec4 _413 = _412;
    _413.z = 0.48860299587249755859375 * _237;
    float _238 = _147.x;
    vec4 _414 = _413;
    _414.w = (-0.48860299587249755859375) * _238;
    vec3 _239 = _147 * _147;
    vec4 _415 = _562;
    _415.x = (1.09254801273345947265625 * _238) * _236;
    vec4 _416 = _415;
    _416.y = ((-1.09254801273345947265625) * _236) * _237;
    vec4 _417 = _416;
    _417.z = 0.3153919875621795654296875 * ((3.0 * _239.z) - 1.0);
    vec4 _418 = _417;
    _418.w = ((-1.09254801273345947265625) * _238) * _237;
    vec4 _419 = _414;
    _419.x = 0.885601043701171875;
    vec3 _232 = _419.yzw * 2.09375;
    vec4 _233 = vec4(_419.x, _232.x, _232.y, _232.z);
    vec4 _234 = _418 * 0.78515625;
    float _235 = (_239.x - _239.y) * 0.4289104640483856201171875;
    vec3 _420 = vec3(0.0);
    _420.x = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(0), _233) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(0), _234)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.x * _235);
    vec3 _421 = _420;
    _421.y = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(1), _233) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(1), _234)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.y * _235);
    vec3 _422 = _421;
    _422.z = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(2), _233) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(2), _234)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.z * _235);
    vec3 _229 = max(vec3(0.0), _422);
    highp vec4 _763 = vec4(_147, 1.0);
    highp vec3 _767 = _563;
    _767.x = dot(View_MobileSkyIrradianceEnvironmentMap(0), _763);
    highp vec3 _771 = _767;
    _771.y = dot(View_MobileSkyIrradianceEnvironmentMap(1), _763);
    highp vec3 _775 = _771;
    _775.z = dot(View_MobileSkyIrradianceEnvironmentMap(2), _763);
    vec3 _260 = max(vec3(0.0), _775) * View_SkyLightColor.xyz;
    vec4 _409;
    do
    {
        _780 = Primitive_Flags;
        if (((_780 & 2u) != 0u) && (View_IndirectLightingCacheShowFlag > 0.0))
        {
            _409 = vec4(IndirectLightingCache_DirectionalLightShadowing, 1.0, 1.0, 1.0);
            break;
        }
        _409 = vec4(1.0);
        break;
    } while(false);
    highp float _788 = _605.w;
    highp vec4 _812;
    int _795 = 0;
    for (;;)
    {
        if (_795 < 4)
        {
            if (_788 < MobileDirectionalLight_DirectionalLightShadowDistances[uint(_795)])
            {
                _812 = MobileDirectionalLight_DirectionalLightScreenToShadow(_795) * vec4(_605.xy, _788, 1.0);
                break;
            }
            _795++;
            continue;
        }
        else
        {
            _812 = vec4(0.0);
            break;
        }
    }
    float _410;
    if (_812.z > 0.0)
    {
        highp vec2 _822 = (_812.xy * MobileDirectionalLight_DirectionalLightShadowSize.xy) - vec2(0.5);
        highp vec2 _823 = fract(_822);
        highp vec2 _827 = (floor(_822) + vec2(1.0)) * MobileDirectionalLight_DirectionalLightShadowSize.zw;
        highp vec4 _833 = vec4((min(1.0 - _812.z, 0.999989986419677734375) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - 1.0);
        highp vec4 _835 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _827, ivec2(-1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _833, vec4(0.0), vec4(1.0));
        highp vec4 _840 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _827, ivec2(1, -1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _833, vec4(0.0), vec4(1.0));
        highp vec4 _845 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _827, ivec2(-1, 1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _833, vec4(0.0), vec4(1.0));
        highp vec4 _850 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _827, ivec2(1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _833, vec4(0.0), vec4(1.0));
        highp float _852 = _823.x;
        highp float _853 = 1.0 - _852;
        highp vec4 _880 = _562;
        _880.x = (((_835.w * _853) + _835.z) + _840.w) + (_840.z * _852);
        highp vec4 _884 = _880;
        _884.y = (((_835.x * _853) + _835.y) + _840.x) + (_840.y * _852);
        highp vec4 _888 = _884;
        _888.z = (((_845.w * _853) + _845.z) + _850.w) + (_850.z * _852);
        highp vec4 _892 = _888;
        _892.w = (((_845.x * _853) + _845.y) + _850.x) + (_850.y * _852);
        highp float _893 = _823.y;
        highp float _902 = clamp((_788 * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.x) + MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.y, 0.0, 1.0);
        _410 = mix(dot(_892, vec4(1.0 - _893, 1.0, 1.0, _893) * 0.111111111938953399658203125), 1.0, _902 * _902);
    }
    else
    {
        _410 = 1.0;
    }
    highp vec4 _921 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    float _278 = _410 * mix(1.0, dot(_409, _921), dot(_921, vec4(1.0)));
    highp float _925 = max(0.0, dot(_147, normalize(_614 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    uint _928 = uint(((vec4(_565.x, _565.y, _565.z, vec4(1.0, 1.0, 1.0, Material_PreshaderBuffer_7.y).w) * View_bSubsurfacePostprocessEnabled).w * 255.0) + 0.5);
    highp vec2 _937 = (vec2(uvec2(5u, _928)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec4 _939 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _937, 0.0);
    float _292 = _939.z;
    highp float _942 = max(clamp(_721 * (_939.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
    float _296 = clamp(_721 * (_939.y * 2.0), 0.0, 1.0);
    float _282 = mix(_942, _296, _292);
    float _283 = dot(_147, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
    highp float _949 = float(_928);
    highp vec2 _958 = (vec2(uvec2(0u, _928)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec3 _961 = vec3(1.0) * max(0.0, dot(_147, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    vec3 _299 = _219 * 0.318407952785491943359375;
    highp float _966 = 1.0 - (_925 * _925);
    float _300 = _942 * _942;
    highp float _967 = _925 * _300;
    highp float _969 = _300 / (_966 + (_967 * _967));
    float _304 = _296 * _296;
    highp float _970 = _925 * _304;
    highp float _972 = _304 / (_966 + (_970 * _970));
    vec4 _318 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _282) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _319 = _318.x;
    float _322 = exp2((-9.28125) * clamp(abs(dot(_147, _614)) + 1.0013580322265625e-05, 0.0, 1.0));
    vec2 _329 = (vec2(-1.0400390625, 1.0400390625) * ((min(_319 * _319, _322) * _319) + _318.y)) + _318.zw;
    float _313 = clamp(_220 * 4.0, 0.0, 1.0);
    uvec2 _1010 = uvec2(uint(_596.x), uint(_596.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _411;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _411 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _664, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_721, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _411 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _664, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_721, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    vec4 _353 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _721) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _354 = _353.x;
    vec2 _362 = (vec2(-1.0400390625, 1.0400390625) * ((min(_354 * _354, _322) * _354) + _353.y)) + _353.zw;
    uint _1059 = ((((min(uint(max(0.0, log2((_576 * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _1010.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _1010.x) * 2u;
    uvec4 _1067 = texelFetch(ps1, int(_1059 + 1u));
    uint _1068 = _1067.x;
    uint _1081 = (uint((_780 & 1024u) != 0u) | (uint((_780 & 2048u) != 0u) << 1u)) | (uint((_780 & 4096u) != 0u) << 2u);
    uint _1082 = min(min(texelFetch(ps1, int(_1059)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _1084;
    _1084 = (((_229 + _260) * _219) + ((((mix(_961 * _278, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_283 - (max(2.0 * _283, 0.4000000059604644775390625) * (1.0 - sqrt(_278))), -1.0) * 0.5) + 0.5, _727, _949), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _958, 0.0).xyz) * _299) * 1.0) + ((_961 * (((_228 * _329.x) + vec3(_313 * _329.y)) * (mix(min(_969 * _969, 2048.0), min(_972 * _972, 2048.0), _292) * ((_282 * 0.25) + 0.25)))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * _278))) + (((_411 * mix(1.0, min((dot(_229, vec3(0.300048828125, 0.58984375, 0.1099853515625)) + dot(_260, vec3(0.300048828125, 0.58984375, 0.1099853515625))) / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_721 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * 1.0) * ((_228 * _362.x) + vec3(_313 * _362.y)));
    highp vec3 _1085;
    SPIRV_CROSS_LOOP
    for (uint _1087 = 0u; _1087 < _1082; _1084 = _1085, _1087++)
    {
        uint _1096 = texelFetch(ps2, int(_1068 + _1087)).x * 6u;
        highp vec4 _1098 = texelFetch(ps0, int(_1096));
        highp vec4 _1100 = texelFetch(ps0, int(_1096 + 1u));
        highp vec4 _1102 = texelFetch(ps0, int(_1096 + 2u));
        highp vec4 _1104 = texelFetch(ps0, int(_1096 + 3u));
        highp float _1105 = _1098.w;
        highp float _1106 = _1105 * _1105;
        highp vec3 _1107 = _1098.xyz;
        highp vec3 _1108 = in_var_TEXCOORD8.xyz - _1107;
        if ((dot(_1108, _1108) * _1106) > 1.0)
        {
            _1085 = _1084;
            continue;
        }
        uint _1115 = floatBitsToUint(_1102.w);
        if (((_1115 >> 8u) & _1081) == 0u)
        {
            _1085 = _1084;
            continue;
        }
        highp float _1124 = _1100.w;
        highp vec4 _1139 = vec4(float((_1115 & 1u) != 0u), float((_1115 & 2u) != 0u), float((_1115 & 4u) != 0u), float((_1115 & 8u) != 0u));
        highp vec3 _1140 = _1107 - in_var_TEXCOORD8.xyz;
        highp float _1141 = dot(_1140, _1140);
        highp vec3 _1143 = _1140 * inversesqrt(_1141);
        highp float _1160;
        if (_1124 == 0.0)
        {
            highp float _1152 = _1141 * _1106;
            highp float _1155 = clamp(1.0 - (_1152 * _1152), 0.0, 1.0);
            _1160 = (_1155 * _1155) * (1.0 / (_1141 + 1.0));
        }
        else
        {
            highp vec3 _1147 = _1140 * _1105;
            _1160 = pow(1.0 - clamp(dot(_1147, _1147), 0.0, 1.0), _1124);
        }
        highp float _1171;
        if (((_1115 >> 16u) & 3u) == 2u)
        {
            highp float _1168 = clamp((dot(_1143, _1102.xyz) - _1104.x) * _1104.y, 0.0, 1.0);
            _1171 = _1160 * (_1168 * _1168);
        }
        else
        {
            _1171 = _1160;
        }
        highp vec3 _1218;
        SPIRV_CROSS_BRANCH
        if (_1171 > 0.0)
        {
            float _366 = mix(1.0, dot(_409, _1139), dot(_1139, vec4(1.0)));
            highp float _1179 = max(0.0, dot(_147, normalize(_614 + _1143)));
            highp vec4 _1181 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _937, 0.0);
            float _376 = _1181.z;
            highp float _1184 = max(clamp(_721 * (_1181.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
            float _380 = clamp(_721 * (_1181.y * 2.0), 0.0, 1.0);
            float _367 = mix(_1184, _380, _376);
            float _368 = dot(_147, _1143);
            highp vec3 _1196 = vec3(1.0) * max(0.0, dot(_147, _1143));
            highp float _1201 = 1.0 - (_1179 * _1179);
            float _383 = _1184 * _1184;
            highp float _1202 = _1179 * _383;
            highp float _1204 = _383 / (_1201 + (_1202 * _1202));
            float _387 = _380 * _380;
            highp float _1205 = _1179 * _387;
            highp float _1207 = _387 / (_1201 + (_1205 * _1205));
            vec4 _399 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _367) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _400 = _399.x;
            vec2 _408 = (vec2(-1.0400390625, 1.0400390625) * ((min(_400 * _400, _322) * _400) + _399.y)) + _399.zw;
            _1218 = (((mix(_1196 * _366, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_368 - (max(2.0 * _368, 0.4000000059604644775390625) * (1.0 - sqrt(_366))), -1.0) * 0.5) + 0.5, _727, _949), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _958, 0.0).xyz) * _299) * 1.0) + ((_1196 * (((_228 * _408.x) + vec3(_313 * _408.y)) * (mix(min(_1204 * _1204, 2048.0), min(_1207 * _1207, 2048.0), _376) * ((_367 * 0.25) + 0.25)))) * 1.0)) * ((_1100.xyz * _1171) * _366);
        }
        else
        {
            _1218 = vec3(0.0);
        }
        _1085 = _1084 + _1218;
    }
    vec3 _74 = _1084 * 1.0;
    vec4 _423 = vec4(_74.x, _74.y, _74.z, _562.w);
    _423.w = 0.0;
    highp vec3 _1221 = min((_423.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_1221.x, _1221.y, _1221.z, _423.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

