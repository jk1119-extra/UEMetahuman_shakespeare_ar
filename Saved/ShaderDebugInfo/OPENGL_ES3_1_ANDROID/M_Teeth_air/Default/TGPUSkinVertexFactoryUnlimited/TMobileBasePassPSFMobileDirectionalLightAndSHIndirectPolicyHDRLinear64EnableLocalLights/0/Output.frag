// ! M_Teeth_air/Default/TGPUSkinVertexFactoryUnlimited/TMobileBasePassPSFMobileDirectionalLightAndSHIndirectPolicyHDRLinear64EnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_PreExposure(546,1),View_NormalCurvatureToRoughnessScaleBias(732,3),View_SkyLightColor(748,4),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3),View_IndirectLightingCacheShowFlag(943,1),View_bSubsurfacePostprocessEnabled(987,1),View_SSProfilesTextureSizeAndInvSize(988,4)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: IndirectLightingCache(4): IndirectLightingCache_DirectionalLightShadowing(20,1),IndirectLightingCache_IndirectLightingSHCoefficients0(24,12),IndirectLightingCache_IndirectLightingSHCoefficients1(36,12),IndirectLightingCache_IndirectLightingSHCoefficients2(48,4)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_2(8,4),Material_PreshaderBuffer_3(12,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_7(28,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:546-0:h:16:1,0:732-0:h:20:3,0:748-0:h:24:4,0:786-0:m:8:1,0:792-0:h:28:3,0:943-0:h:32:1,0:987-0:h:36:1,0:988-0:h:40:4,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:20-4:m:0:1,4:24-4:h:0:12,4:36-4:h:12:12,4:48-4:h:24:4,5:0-5:m:0:4,5:4-5:m:4:4,5:12-5:m:8:4,5:84-5:u:0:1,6:4-6:h:0:4,6:8-6:h:4:4,6:12-6:h:8:4,6:16-6:h:12:4,6:20-6:h:16:4,6:24-6:h:20:4,6:28-6:h:24:4
// @Samplers: MobileBasePass_Forward_ForwardLocalLightBuffer(0:1),MobileBasePass_Forward_NumCulledLightsGrid(1:1),MobileBasePass_Forward_CulledLightDataGrid(2:1),View_SSProfilesTexture(3:1[View_SSProfilesSampler]),View_SSProfilesPreIntegratedTexture(4:1[View_SSProfilesPreIntegratedSampler]),MobileReflectionCapture_Texture(5:1[MobileReflectionCapture_TextureSampler]),Material_Texture2D_0(6:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(7:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(8:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(9:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(10:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(11:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(12:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(13:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(14:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(15:1[Material_Texture2D_9Sampler]),Material_Texture2D_10(16:1[Material_Texture2D_10Sampler])
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

#define View_SSProfilesTextureSizeAndInvSize (pc0_h[10])
#define View_bSubsurfacePostprocessEnabled (pc0_h[9].x)
#define View_IndirectLightingCacheShowFlag (pc0_h[8].x)
#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[7].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
#define View_SkyLightColor (pc0_h[6])
#define View_NormalCurvatureToRoughnessScaleBias (pc0_h[5].xyz)
#define View_PreExposure (pc0_h[4].x)
#define View_ViewRectMin (pc0_m[1])
#define View_ViewForward (pc0_m[0].xyz)
#define View_ViewToClip (mat4(pc0_h[0 + 0].xyzw,pc0_h[0 + 1].xyzw,pc0_h[0 + 2].xyzw,pc0_h[0 + 3].xyzw))
#define SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler ps3
#define SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler ps4
#define SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler ps5
#define SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler ps6
#define SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler ps7
#define SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler ps8
#define SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler ps9
#define SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler ps10
#define SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler ps11
#define SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler ps12
#define SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler ps13
#define SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler ps14
#define SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler ps15
#define SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler ps16
uniform mediump vec4 pc0_m[3];
uniform highp vec4 pc0_h[11];


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
uniform highp sampler2D SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler;
uniform highp sampler2DArray SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler;
uniform highp samplerCube SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler;

layout(location = 0) in vec4 in_var_TEXCOORD10;
layout(location = 1) in vec4 in_var_TEXCOORD11;
layout(location = 2) in highp vec4 in_var_TEXCOORD0[1];
layout(location = 3) in highp vec4 in_var_TEXCOORD8;
layout(location = 0) out vec4 out_var_SV_Target0;
layout(location = 1) out highp float out_var_SV_Target1;

vec4 _538;
vec3 _540;
vec4 _541;

void main()
{
    highp vec3 _573;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _573 = -View_ViewForward;
    }
    else
    {
        _573 = normalize(-in_var_TEXCOORD8.xyz);
    }
    uint _721;
    vec2 _181 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _584 = vec4(_181, sqrt(clamp(1.0 - dot(_181, _181), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_1.xyz;
    float _89 = _584.z + 1.0;
    vec2 _188 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec4 _595 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp float _598 = _595.x * Material_PreshaderBuffer_1.w;
    vec3 _93 = vec4(_188, sqrt(clamp(1.0 - dot(_188, _188), 0.0, 1.0)), 1.0).xyz * vec3(_598, _598, 1.0);
    vec3 _98 = vec3(_584.xy, _89);
    vec3 _102 = vec3(_93.xy * vec2(-1.0), _93.z);
    vec3 _108 = (_98 * vec3(dot(_98, _102))) - (vec3(_89) * _102);
    float _110 = _108.z + 1.0;
    vec2 _195 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_2.x)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _611 = mix(vec3(0.0, 0.0, 1.0), vec4(_195, sqrt(clamp(1.0 - dot(_195, _195), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_2.y));
    vec3 _118 = vec3(_108.xy, _110);
    vec3 _122 = vec3(_611.xy * vec2(-1.0), _611.z);
    vec3 _128 = (_118 * vec3(dot(_118, _122))) - (vec3(_110) * _122);
    float _130 = _128.z + 1.0;
    highp vec4 _615 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec2 _202 = (_615.xy * vec2(2.0)) - vec2(1.0);
    highp float _618 = sqrt(clamp(1.0 - dot(_202, _202), 0.0, 1.0));
    vec3 _135 = vec3(_128.xy, _130);
    vec3 _138 = vec3(vec4(_202, _618, 1.0).xy * vec2(-1.0), _618);
    vec3 _145 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_135 * vec3(dot(_135, _138))) - (vec3(_130) * _138))) * 1.0;
    highp vec3 _623 = (-_573) + ((_145 * dot(_145, _573)) * 2.0);
    highp vec4 _627 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp vec4 _634 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, Material_PreshaderBuffer_3.xy);
    highp vec4 _638 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _146 = _627.xyz;
    highp vec4 _645 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_4.xy);
    highp vec4 _651 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _157 = _651.x;
    vec3 _159 = mix(mix(_146, _634.xyz * (_146 / _638.xyz), vec3(0.669921875)), (_645.xyz * (_146 * vec3(1.0380132198333740234375, 1.27521789073944091796875, 1.815602779388427734375))) * vec3(Material_PreshaderBuffer_4.z), vec3(_157));
    highp vec4 _658 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, Material_PreshaderBuffer_5.yz);
    float _211 = _658.x;
    float _212 = _658.y;
    float _209 = _658.z;
    vec3 _168 = _595.xyz;
    vec3 _170 = normalize(in_var_TEXCOORD11.xyz);
    vec3 _217 = clamp(mix(_159, _159 * vec3((_211 <= 0.0) ? 0.0 : pow(_211, 0.300048828125), (_212 <= 0.0) ? 0.0 : pow(_212, 0.300048828125), (_209 <= 0.0) ? 0.0 : pow(_209, 0.300048828125)), vec3(_157 * clamp(1.0 - ((1.0 - _651.y) * Material_PreshaderBuffer_6.y), 0.0, 1.0))) * _168, vec3(0.0), vec3(1.0));
    float _218 = clamp((_168 * vec3(smoothstep(0.0, Material_PreshaderBuffer_6.z, dot(((vec3(dot(_573, _170)) * _170) * vec3(2.0)) - _573, _573)) * 0.449951171875)).x, 0.0, 1.0);
    highp float _680 = max(0.015625, clamp(mix(Material_PreshaderBuffer_7.x, Material_PreshaderBuffer_6.w, _157), 0.0, 1.0));
    vec3 _221 = dFdx(_145);
    vec3 _222 = dFdy(_145);
    highp float _686 = clamp(pow(max(dot(_221, _221), dot(_222, _222)), View_NormalCurvatureToRoughnessScaleBias.z), 0.001000000047497451305389404296875, 1.0);
    vec3 _226 = vec3(0.07999999821186065673828125 * _218);
    float _233 = _145.y;
    vec4 _399 = _541;
    _399.y = (-0.48860299587249755859375) * _233;
    float _234 = _145.z;
    vec4 _400 = _399;
    _400.z = 0.48860299587249755859375 * _234;
    float _235 = _145.x;
    vec4 _401 = _400;
    _401.w = (-0.48860299587249755859375) * _235;
    vec3 _236 = _145 * _145;
    vec4 _402 = _538;
    _402.x = (1.09254801273345947265625 * _235) * _233;
    vec4 _403 = _402;
    _403.y = ((-1.09254801273345947265625) * _233) * _234;
    vec4 _404 = _403;
    _404.z = 0.3153919875621795654296875 * ((3.0 * _236.z) - 1.0);
    vec4 _405 = _404;
    _405.w = ((-1.09254801273345947265625) * _235) * _234;
    vec4 _406 = _401;
    _406.x = 0.885601043701171875;
    vec3 _229 = _406.yzw * 2.09375;
    vec4 _230 = vec4(_406.x, _229.x, _229.y, _229.z);
    vec4 _231 = _405 * 0.78515625;
    float _232 = (_236.x - _236.y) * 0.4289104640483856201171875;
    vec3 _407 = vec3(0.0);
    _407.x = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(0), _230) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(0), _231)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.x * _232);
    vec3 _408 = _407;
    _408.y = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(1), _230) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(1), _231)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.y * _232);
    vec3 _409 = _408;
    _409.z = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(2), _230) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(2), _231)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.z * _232);
    vec3 _227 = max(vec3(0.0), _409);
    vec4 _397;
    do
    {
        _721 = Primitive_Flags;
        if (((_721 & 2u) != 0u) && (View_IndirectLightingCacheShowFlag > 0.0))
        {
            _397 = vec4(IndirectLightingCache_DirectionalLightShadowing, 1.0, 1.0, 1.0);
            break;
        }
        _397 = vec4(1.0);
        break;
    } while(false);
    highp vec4 _746 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    float _266 = mix(1.0, dot(_397, _746), dot(_746, vec4(1.0)));
    highp float _750 = max(0.0, dot(_145, normalize(_573 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    uint _753 = uint(((vec4(_540.x, _540.y, _540.z, vec4(1.0, 1.0, 1.0, Material_PreshaderBuffer_7.y).w) * View_bSubsurfacePostprocessEnabled).w * 255.0) + 0.5);
    highp vec2 _762 = (vec2(uvec2(5u, _753)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec4 _764 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _762, 0.0);
    float _280 = _764.z;
    highp float _767 = max(clamp(_680 * (_764.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
    float _284 = clamp(_680 * (_764.y * 2.0), 0.0, 1.0);
    float _270 = mix(_767, _284, _280);
    float _271 = dot(_145, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
    highp float _774 = float(_753);
    highp vec2 _783 = (vec2(uvec2(0u, _753)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec3 _786 = vec3(1.0) * max(0.0, dot(_145, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    vec3 _287 = _217 * 0.318407952785491943359375;
    highp float _791 = 1.0 - (_750 * _750);
    float _288 = _767 * _767;
    highp float _792 = _750 * _288;
    highp float _794 = _288 / (_791 + (_792 * _792));
    float _292 = _284 * _284;
    highp float _795 = _750 * _292;
    highp float _797 = _292 / (_791 + (_795 * _795));
    vec4 _306 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _270) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _307 = _306.x;
    float _310 = exp2((-9.28125) * clamp(abs(dot(_145, _573)) + 1.0013580322265625e-05, 0.0, 1.0));
    vec2 _317 = (vec2(-1.0400390625, 1.0400390625) * ((min(_307 * _307, _310) * _307) + _306.y)) + _306.zw;
    float _301 = clamp(_218 * 4.0, 0.0, 1.0);
    highp vec2 _810 = gl_FragCoord.xy - View_ViewRectMin.xy;
    uvec2 _837 = uvec2(uint(_810.x), uint(_810.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _398;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _398 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _623, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_680, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _398 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _623, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_680, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    vec4 _341 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _680) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _342 = _341.x;
    vec2 _350 = (vec2(-1.0400390625, 1.0400390625) * ((min(_342 * _342, _310) * _342) + _341.y)) + _341.zw;
    uint _887 = ((((min(uint(max(0.0, log2(((1.0 / gl_FragCoord.w) * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _837.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _837.x) * 2u;
    uvec4 _895 = texelFetch(ps1, int(_887 + 1u));
    uint _896 = _895.x;
    uint _909 = (uint((_721 & 1024u) != 0u) | (uint((_721 & 2048u) != 0u) << 1u)) | (uint((_721 & 4096u) != 0u) << 2u);
    uint _910 = min(min(texelFetch(ps1, int(_887)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _912;
    _912 = ((_227 * _217) + ((((mix(_786 * _266, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_271 - (max(2.0 * _271, 0.4000000059604644775390625) * (1.0 - sqrt(_266))), -1.0) * 0.5) + 0.5, _686, _774), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _783, 0.0).xyz) * _287) * 1.0) + ((_786 * (((_226 * _317.x) + vec3(_301 * _317.y)) * (mix(min(_794 * _794, 2048.0), min(_797 * _797, 2048.0), _280) * ((_270 * 0.25) + 0.25)))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * _266))) + (((_398 * mix(1.0, min(dot(_227, vec3(0.300048828125, 0.58984375, 0.1099853515625)) / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_680 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * 1.0) * ((_226 * _350.x) + vec3(_301 * _350.y)));
    highp vec3 _913;
    SPIRV_CROSS_LOOP
    for (uint _915 = 0u; _915 < _910; _912 = _913, _915++)
    {
        uint _924 = texelFetch(ps2, int(_896 + _915)).x * 6u;
        highp vec4 _926 = texelFetch(ps0, int(_924));
        highp vec4 _928 = texelFetch(ps0, int(_924 + 1u));
        highp vec4 _930 = texelFetch(ps0, int(_924 + 2u));
        highp vec4 _932 = texelFetch(ps0, int(_924 + 3u));
        highp float _933 = _926.w;
        highp float _934 = _933 * _933;
        highp vec3 _935 = _926.xyz;
        highp vec3 _936 = in_var_TEXCOORD8.xyz - _935;
        if ((dot(_936, _936) * _934) > 1.0)
        {
            _913 = _912;
            continue;
        }
        uint _943 = floatBitsToUint(_930.w);
        if (((_943 >> 8u) & _909) == 0u)
        {
            _913 = _912;
            continue;
        }
        highp float _952 = _928.w;
        highp vec4 _967 = vec4(float((_943 & 1u) != 0u), float((_943 & 2u) != 0u), float((_943 & 4u) != 0u), float((_943 & 8u) != 0u));
        highp vec3 _968 = _935 - in_var_TEXCOORD8.xyz;
        highp float _969 = dot(_968, _968);
        highp vec3 _971 = _968 * inversesqrt(_969);
        highp float _988;
        if (_952 == 0.0)
        {
            highp float _980 = _969 * _934;
            highp float _983 = clamp(1.0 - (_980 * _980), 0.0, 1.0);
            _988 = (_983 * _983) * (1.0 / (_969 + 1.0));
        }
        else
        {
            highp vec3 _975 = _968 * _933;
            _988 = pow(1.0 - clamp(dot(_975, _975), 0.0, 1.0), _952);
        }
        highp float _999;
        if (((_943 >> 16u) & 3u) == 2u)
        {
            highp float _996 = clamp((dot(_971, _930.xyz) - _932.x) * _932.y, 0.0, 1.0);
            _999 = _988 * (_996 * _996);
        }
        else
        {
            _999 = _988;
        }
        highp vec3 _1046;
        SPIRV_CROSS_BRANCH
        if (_999 > 0.0)
        {
            float _354 = mix(1.0, dot(_397, _967), dot(_967, vec4(1.0)));
            highp float _1007 = max(0.0, dot(_145, normalize(_573 + _971)));
            highp vec4 _1009 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _762, 0.0);
            float _364 = _1009.z;
            highp float _1012 = max(clamp(_680 * (_1009.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
            float _368 = clamp(_680 * (_1009.y * 2.0), 0.0, 1.0);
            float _355 = mix(_1012, _368, _364);
            float _356 = dot(_145, _971);
            highp vec3 _1024 = vec3(1.0) * max(0.0, dot(_145, _971));
            highp float _1029 = 1.0 - (_1007 * _1007);
            float _371 = _1012 * _1012;
            highp float _1030 = _1007 * _371;
            highp float _1032 = _371 / (_1029 + (_1030 * _1030));
            float _375 = _368 * _368;
            highp float _1033 = _1007 * _375;
            highp float _1035 = _375 / (_1029 + (_1033 * _1033));
            vec4 _387 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _355) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _388 = _387.x;
            vec2 _396 = (vec2(-1.0400390625, 1.0400390625) * ((min(_388 * _388, _310) * _388) + _387.y)) + _387.zw;
            _1046 = (((mix(_1024 * _354, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_356 - (max(2.0 * _356, 0.4000000059604644775390625) * (1.0 - sqrt(_354))), -1.0) * 0.5) + 0.5, _686, _774), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _783, 0.0).xyz) * _287) * 1.0) + ((_1024 * (((_226 * _396.x) + vec3(_301 * _396.y)) * (mix(min(_1032 * _1032, 2048.0), min(_1035 * _1035, 2048.0), _364) * ((_355 * 0.25) + 0.25)))) * 1.0)) * ((_928.xyz * _999) * _354);
        }
        else
        {
            _1046 = vec3(0.0);
        }
        _913 = _912 + _1046;
    }
    vec3 _72 = _912 * 1.0;
    vec4 _410 = vec4(_72.x, _72.y, _72.z, _538.w);
    _410.w = 0.0;
    highp vec3 _1050 = min((_410.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_1050.x, _1050.y, _1050.z, _410.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

